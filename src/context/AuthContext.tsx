import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type AuthContextValue = {
  isAuthenticated: boolean
  userName: string | null
  login: (nextUserName?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userName, setUserName] = useState<string | null>(null)

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: userName !== null,
      userName,
      login: (nextUserName = 'Placement Candidate') => {
        setUserName(nextUserName)
      },
      logout: () => {
        setUserName(null)
      },
    }),
    [userName],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}