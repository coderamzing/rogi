"use client"

import { createContext, useContext, type ReactNode } from "react"

// Create a dummy context that doesn't do any real auth
const AuthContext = createContext({
  user: {
    id: "demo-user",
    name: "Demo User",
    email: "demo@example.com",
  },
  isAuthenticated: true,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  // Simply return children without any provider
  return <>{children}</>
}

export function useAuth() {
  return useContext(AuthContext)
}
