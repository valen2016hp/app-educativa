
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ActivityLogEntry, UserContextType } from '../types';

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY_USER = 'mente_brillante_user';
const STORAGE_KEY_LOG = 'mente_brillante_log';

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState<string>('Campeona');
  const [activityLog, setActivityLog] = useState<ActivityLogEntry[]>([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEY_USER);
      const storedLog = localStorage.getItem(STORAGE_KEY_LOG);

      if (storedUser) setUserName(storedUser);
      if (storedLog) setActivityLog(JSON.parse(storedLog));
    } catch (error) {
      console.error("Error loading data from localStorage", error);
    }
  }, []);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_USER, userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LOG, JSON.stringify(activityLog));
  }, [activityLog]);

  const addActivity = (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => {
    const newEntry: ActivityLogEntry = {
      ...entry,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    // Add to the beginning of the array (Newest first)
    setActivityLog((prev) => [newEntry, ...prev]);
  };

  const clearHistory = () => {
    if (window.confirm("¿Seguro que quieres borrar todo el historial?")) {
      setActivityLog([]);
    }
  };

  const downloadReport = () => {
    if (activityLog.length === 0) {
      alert("No hay actividad para exportar.");
      return;
    }

    // CSV Header
    const headers = ["Fecha", "Hora", "Acción", "Asignatura", "Tema", "Nivel", "Puntuación", "Duración (s)"];
    
    // CSV Rows (Data is already sorted new -> old in state)
    const rows = activityLog.map(entry => {
      const date = new Date(entry.timestamp);
      const dateStr = date.toLocaleDateString('es-ES');
      const timeStr = date.toLocaleTimeString('es-ES');
      
      const scoreStr = entry.score !== undefined ? `${entry.score}/${entry.maxScore}` : '-';
      const durationStr = entry.duration ? entry.duration.toString() : '-';

      // Escape quotes for CSV safety
      const safeAction = `"${translateAction(entry.action)}"`;
      const safeSubject = `"${entry.subjectId}"`;
      const safeTopic = `"${entry.topicId}"`;
      
      return [dateStr, timeStr, safeAction, safeSubject, safeTopic, entry.levelId, scoreStr, durationStr].join(';');
    });

    // Combine header and rows
    // Note: We use semicolon (;) because Excel in many European regions expects it.
    const csvContent = [headers.join(';'), ...rows].join('\n');

    // Create a Blob with BOM (Byte Order Mark) so Excel opens UTF-8 correctly
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create download link
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Reporte_Actividad_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const translateAction = (action: string) => {
    switch(action) {
      case 'TEST_COMPLETED': return 'Examen Completado';
      case 'PRACTICE_COMPLETED': return 'Práctica Completada';
      case 'VIEW_INFOGRAPHIC': return 'Visto Infografía';
      case 'VIEW_PRESENTATION': return 'Visto Presentación';
      default: return action;
    }
  };

  return (
    <UserContext.Provider value={{ userName, setUserName, activityLog, addActivity, clearHistory, downloadReport }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
