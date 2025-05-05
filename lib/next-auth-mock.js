"use client"

// Mock implementation of next-auth/react for client components
// that import from next-auth/react directly

import { createContext, useContext } from "react"

const mockUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

// Session context with default mock data
const SessionContext = createContext({
  data: {
    user: mockUser,
    expires: "2099-12-31T23:59:59.999Z",
  },
  status: "authenticated",
  update: () => Promise.resolve(null),
})

export function SessionProvider({ children }) {
  return (
    <SessionContext.Provider
      value={{
        data: {
          user: mockUser,
          expires: "2099-12-31T23:59:59.999Z",
        },
        status: "authenticated",
        update: () => Promise.resolve(null),
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}

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
