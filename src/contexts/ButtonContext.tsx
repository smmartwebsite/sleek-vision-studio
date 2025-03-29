
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';

interface ButtonContextType {
  globalSize: ButtonSize;
  globalVariant: ButtonVariant;
  setGlobalSize: (size: ButtonSize) => void;
  setGlobalVariant: (variant: ButtonVariant) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export function ButtonProvider({ children, defaultSize = 'default', defaultVariant = 'default' }: {
  children: ReactNode;
  defaultSize?: ButtonSize;
  defaultVariant?: ButtonVariant;
}) {
  const [globalSize, setGlobalSize] = useState<ButtonSize>(defaultSize);
  const [globalVariant, setGlobalVariant] = useState<ButtonVariant>(defaultVariant);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ButtonContext.Provider value={{
      globalSize,
      globalVariant,
      setGlobalSize,
      setGlobalVariant,
      isLoading,
      setIsLoading
    }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButtonContext() {
  const context = useContext(ButtonContext);
  if (context === undefined) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
}
