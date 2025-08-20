"use client";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { validateEnv } from "../constants";

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
  useEffect(()=>{
    validateEnv()
  },[])
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
