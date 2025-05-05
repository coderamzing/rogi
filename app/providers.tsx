"use client"

import type React from "react"
import { SessionProvider } from "next-auth/react"

// Mock session data
const mockSession = {
  user: {
    id: "demo-user",
    name: "Demo User",
    email: "demo@example.com",
  },
  expires: "2099-12-31T23:59:59.999Z",
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider session={mockSession}>{children}</SessionProvider>
}
