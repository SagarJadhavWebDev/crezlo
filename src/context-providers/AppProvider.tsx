"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (value: boolean) => void;
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: true,
  setSidebarOpen: (value: boolean) => {},
  sidebarExpanded: true,
  setSidebarExpanded: (value: boolean) => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        sidebarExpanded,
        setSidebarExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppProvider = () => useContext(AppContext);
