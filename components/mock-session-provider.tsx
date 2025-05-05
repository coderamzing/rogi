"use client"

import { createContext, useContext, type ReactNode } from "react"

// Mock user data
const mockUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

// Create a mock session context
const MockSessionContext = createContext({
  data: {
    user: mockUser,
    expires: "2099-12-31T23:59:59.999Z",
  },
  status: "authenticated",
  update: () => Promise.resolve(null),
})

// Create the hook that will be used in place of useSession
export function useMockSession() {
  return useContext(MockSessionContext)
}

// The provider component
export function MockSessionProvider({ children }: { children: ReactNode }) {
  const mockSession = {
    data: {
      user: mockUser,
      expires: "2099-12-31T23:59:59.999Z",
    },
    status: "authenticated" as const,
    update: () => Promise.resolve(null),
  }

  return <MockSessionContext.Provider value={mockSession}>{children}</MockSessionContext.Provider>
}
