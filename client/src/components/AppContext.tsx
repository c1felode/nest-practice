import { createContext, useContext, useState, type Dispatch, type SetStateAction, type ReactNode } from 'react';

type AppContextType = {
  isSubmit: boolean;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// Use ReactNode instead of any
export function AppProvider({ children }: { children: ReactNode }) {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  
  const globalState = {
    isSubmit,
    setIsSubmit,
  };

  return (
    <AppContext.Provider value={globalState}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within AppProvider');
  }
  return context;
}
