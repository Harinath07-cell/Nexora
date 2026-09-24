import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'mr' | 'bn' | 'or';

export type UserType = 'existing' | 'savings' | 'loan';

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
  userType?: UserType;
}

interface AppContextType {
  userData: UserData;
  setUserData: (d: Partial<UserData>) => void;
  currentScreen: 'home' | 'login' | 'financial-plan' | 'report' | 'loan-finder';
  setScreen: (s: 'home' | 'login' | 'financial-plan' | 'report' | 'loan-finder') => void;
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
  const [currentScreen, setCurrentScreen] = useState<'home' | 'login' | 'financial-plan' | 'report' | 'loan-finder'>('home');

  const setUserData = (d: Partial<UserData>) => {
    setUserDataState(prev => ({ ...prev, ...d }));
  };

  const setScreen = (s: 'home' | 'login' | 'financial-plan' | 'report' | 'loan-finder') => {
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
