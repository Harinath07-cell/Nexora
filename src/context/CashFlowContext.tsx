import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CashFlowEntry {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'inflow' | 'outflow';
  category: string;
}

export interface CashFlowData {
  existingBusiness: CashFlowEntry[];
  newBusiness: CashFlowEntry[];
}

interface CashFlowContextType {
  cashFlowData: CashFlowData;
  addEntry: (userType: 'existingBusiness' | 'newBusiness', entry: Omit<CashFlowEntry, 'id'>) => void;
  updateEntry: (userType: 'existingBusiness' | 'newBusiness', id: string, entry: Omit<CashFlowEntry, 'id'>) => void;
  deleteEntry: (userType: 'existingBusiness' | 'newBusiness', id: string) => void;
  getEntries: (userType: 'existingBusiness' | 'newBusiness') => CashFlowEntry[];
}

const CashFlowContext = createContext<CashFlowContextType | undefined>(undefined);

export function CashFlowProvider({ children }: { children: ReactNode }) {
  const [cashFlowData, setCashFlowData] = useState<CashFlowData>(() => {
    const saved = localStorage.getItem('cashFlowData');
    return saved ? JSON.parse(saved) : {
      existingBusiness: [],
      newBusiness: []
    };
  });

  useEffect(() => {
    localStorage.setItem('cashFlowData', JSON.stringify(cashFlowData));
  }, [cashFlowData]);

  const addEntry = (userType: 'existingBusiness' | 'newBusiness', entry: Omit<CashFlowEntry, 'id'>) => {
    const newEntry: CashFlowEntry = {
      ...entry,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };
    setCashFlowData(prev => ({
      ...prev,
      [userType]: [...prev[userType], newEntry]
    }));
  };

  const updateEntry = (userType: 'existingBusiness' | 'newBusiness', id: string, entry: Omit<CashFlowEntry, 'id'>) => {
    setCashFlowData(prev => ({
      ...prev,
      [userType]: prev[userType].map(e => e.id === id ? { ...entry, id } : e)
    }));
  };

  const deleteEntry = (userType: 'existingBusiness' | 'newBusiness', id: string) => {
    setCashFlowData(prev => ({
      ...prev,
      [userType]: prev[userType].filter(e => e.id !== id)
    }));
  };

  const getEntries = (userType: 'existingBusiness' | 'newBusiness') => {
    return cashFlowData[userType];
  };

  return (
    <CashFlowContext.Provider value={{
      cashFlowData,
      addEntry,
      updateEntry,
      deleteEntry,
      getEntries
    }}>
      {children}
    </CashFlowContext.Provider>
  );
}

export function useCashFlow() {
  const context = useContext(CashFlowContext);
  if (!context) {
    throw new Error('useCashFlow must be used within CashFlowProvider');
  }
  return context;
}
