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
    setActivityLog((prev) => [newEntry, ...prev]);
  };

  const clearHistory = () => {
    if (window.confirm("¿Seguro que quieres borrar todo el historial?")) {
      setActivityLog([]);
    }
  };

  return (
    <UserContext.Provider value={{ userName, setUserName, activityLog, addActivity, clearHistory }}>
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