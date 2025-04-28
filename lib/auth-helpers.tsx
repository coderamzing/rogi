"use client"

import { createContext, useContext, type ReactNode } from "react"

// Mock auth user
const mockUser = {
  id: "mock-user-id",
  name: "Mock User",
  email: "mock@example.com",
}

// Mock session context
const SessionContext = createContext({
  data: {
    user: mockUser,
    expires: "2099-12-31T23:59:59.999Z",
  },
  status: "authenticated",
  update: () => Promise.resolve(null),
})

// Mock auth context
const AuthContext = createContext({
  user: mockUser,
  isAuthenticated: true,
})

// SessionProvider component
export function SessionProvider({ children }: { children: ReactNode }) {
  const session = {
    data: {
      user: mockUser,
      expires: "2099-12-31T23:59:59.999Z",
    },
    status: "authenticated" as const,
    update: () => Promise.resolve(null),
  }

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
}

// AuthProvider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = {
    user: mockUser,
    isAuthenticated: true,
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// useSession hook (for components that import from next-auth/react)
export function useSession() {
  return useContext(SessionContext)
}

// useAuth hook (for components that import from custom auth context)
export function useAuth() {
  return useContext(AuthContext)
}

// Other next-auth functions that might be used
export function signIn() {
  return Promise.resolve({ ok: true, error: "", status: 200 })
}

export function signOut() {
  return Promise.resolve({ url: "/" })
}

export function getSession() {
  return Promise.resolve({
    user: mockUser,
    expires: "2099-12-31T23:59:59.999Z",
  })
}
