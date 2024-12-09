"use client"
import React, { createContext, useContext, useState } from 'react';

type CursorContextType = {
  cursorVariant: 'default' | 'work';
  setCursorVariant: (variant: 'default' | 'work') => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'work'>('default');
  
  // Debug log
  console.log('Current cursor variant:', cursorVariant);

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within a CursorProvider');
  return context;
};
