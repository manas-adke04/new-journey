import { createContext, useContext, type ReactNode } from 'react'

type AppContextValue = {
  appName: string
  tagline: string
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

const defaultValue: AppContextValue = {
  appName: 'Placement Portal',
  tagline: 'A clean Vite React starter organized for production growth.',
}

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <AppContext.Provider value={defaultValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
