import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

// Route context
interface RouteContextType {
  route: string | null;
  setRoute: (route: string) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);
export const RouteProvider = ({ children }: ContextProps) => {
  const [route, setRoute] = useState<string | null>(null);
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = (): RouteContextType => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};

// History context
interface HistoryContextType {
  history: string[];
  setHistory: (history: string[]) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);
export const HistoryProvider = ({ children }: ContextProps) => {
  const [history, setHistory] = useState<string[]>([]);
  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};
