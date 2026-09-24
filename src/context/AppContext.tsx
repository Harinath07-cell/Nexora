import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'mr' | 'bn' | 'or';

export interface UserData {
  name: string;
  address: string;
  state: string;
  district: string;
  village: string;
  margin: number;
  community: string;
  businessType: string;
  language: Language;
}

interface AppContextType {
  userData: UserData;
  setUserData: (d: Partial<UserData>) => void;
  currentScreen: 'login' | 'financial-plan' | 'report';
  setScreen: (s: 'login' | 'financial-plan' | 'report') => void;
}

const defaultUserData: UserData = {
  name: '',
  address: '',
  state: '',
  district: '',
  village: '',
  margin: 0,
  community: '',
  businessType: '',
  language: 'en',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userData, setUserDataState] = useState<UserData>(defaultUserData);
  const [currentScreen, setCurrentScreen] = useState<'login' | 'financial-plan' | 'report'>('login');

  const setUserData = (d: Partial<UserData>) => {
    setUserDataState(prev => ({ ...prev, ...d }));
  };

  const setScreen = (s: 'login' | 'financial-plan' | 'report') => {
    setCurrentScreen(s);
  };

  return (
    <AppContext.Provider value={{ userData, setUserData, currentScreen, setScreen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
