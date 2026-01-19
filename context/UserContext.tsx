
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ActivityLogEntry, UserContextType } from '../types';
import { GoogleGenAI } from "@google/genai";

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY_USER = 'mente_brillante_user';
const STORAGE_KEY_LOG = 'mente_brillante_log';
const STORAGE_KEY_MAGIC = 'mente_brillante_magic_key';

// TODO: Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwwaAgppa2Pkkicely_lVQRCN9kZdcKMQErscrqBPI3SKJYk-uJZnGJ7OQ9uabyJW5l/exec';

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState<string>('Campeona');
  const [activityLog, setActivityLog] = useState<ActivityLogEntry[]>([]);
  const [magicKey, setMagicKey] = useState<string>('');
  const [isSyncing, setIsSyncing] = useState(false);

  // Initialize data
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY_USER);
    const storedLog = localStorage.getItem(STORAGE_KEY_LOG);
    const storedMagic = localStorage.getItem(STORAGE_KEY_MAGIC);

    if (storedUser) setUserName(storedUser);
    if (storedLog) setActivityLog(JSON.parse(storedLog));
    
    if (storedMagic) {
      setMagicKey(storedMagic);
      // Auto-fetch history from cloud if we have a key
      pullHistoryFromCloud(storedMagic);
    } else {
      generateMagicKey();
    }
  }, []);

  // Persistence for user name
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_USER, userName);
  }, [userName]);

  const generateMagicKey = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Genera una 'Clave Mágica' de 3 palabras divertidas para una niña de 9 años (ejemplo: Estrella-Solar-Valiente). Devuelve SOLO las 3 palabras separadas por guiones.",
      });
      const key = response.text?.trim() || `Heroe-${Math.floor(Math.random() * 9000 + 1000)}`;
      setMagicKey(key);
      localStorage.setItem(STORAGE_KEY_MAGIC, key);
    } catch (e) {
      const fallback = `Aventurera-${Math.floor(Math.random() * 9999)}`;
      setMagicKey(fallback);
      localStorage.setItem(STORAGE_KEY_MAGIC, fallback);
    }
  };

  const pullHistoryFromCloud = async (keyToUse: string) => {
    if (!GOOGLE_SCRIPT_URL.includes('macros/s/')) return;
    setIsSyncing(true);
    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?magicKey=${encodeURIComponent(keyToUse)}`);
      if (response.ok) {
        const cloudData = await response.json();
        if (Array.isArray(cloudData) && cloudData.length > 0) {
          // Merge or overwrite? For cross-device, cloud is usually source of truth
          const formattedData = cloudData.reverse(); // Latest first
          setActivityLog(formattedData);
          localStorage.setItem(STORAGE_KEY_LOG, JSON.stringify(formattedData));
        }
      }
    } catch (error) {
      console.error("Error pulling from Google Sheets:", error);
    } finally {
      setIsSyncing(false);
    }
  };

  const pushActivityToCloud = async (entry: ActivityLogEntry) => {
    if (!GOOGLE_SCRIPT_URL.includes('macros/s/')) return;
    try {
      // We use 'no-cors' for simple POSTs to Google Apps Script
      // Note: with no-cors we can't see the response, but the data is sent.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...entry, magicKey })
      });
    } catch (error) {
      console.error("Error pushing to Google Sheets:", error);
    }
  };

  const addActivity = (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => {
    const newEntry: ActivityLogEntry = {
      ...entry,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };

    // Update local state immediately for responsiveness
    setActivityLog((prev) => {
      const updated = [newEntry, ...prev];
      localStorage.setItem(STORAGE_KEY_LOG, JSON.stringify(updated));
      return updated;
    });

    // Send to Google Sheets in background
    pushActivityToCloud(newEntry);
  };

  const clearHistory = () => {
    if (window.confirm("¿Seguro que quieres borrar el historial local? (Los datos en la nube no se borrarán)")) {
      setActivityLog([]);
      localStorage.removeItem(STORAGE_KEY_LOG);
    }
  };

  const downloadReport = () => {
    if (activityLog.length === 0) {
      alert("No hay actividad para exportar.");
      return;
    }
    const headers = ["Fecha", "Hora", "Acción", "Asignatura", "Tema", "Nivel", "Puntuación", "Duración (s)"];
    const rows = activityLog.map(entry => {
      const date = new Date(entry.timestamp);
      return [
        date.toLocaleDateString('es-ES'),
        date.toLocaleTimeString('es-ES'),
        entry.action,
        entry.subjectId,
        entry.topicId,
        entry.levelId,
        entry.score !== undefined ? `${entry.score}/${entry.maxScore}` : '-',
        entry.duration || '-'
      ].join(';');
    });
    const csvContent = [headers.join(';'), ...rows].join('\n');
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `MenteBrillante_Reporte_${magicKey}.csv`;
    link.click();
  };

  return (
    <UserContext.Provider value={{ 
      userName, setUserName, activityLog, addActivity, 
      clearHistory, downloadReport, magicKey, isSyncing,
      setMagicKey: (k: string) => { setMagicKey(k); localStorage.setItem(STORAGE_KEY_MAGIC, k); },
      pullHistoryFromCloud
    } as any}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
