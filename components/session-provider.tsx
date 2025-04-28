"use client"

import type React from "react"

// Simple session provider that just renders children
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// This is only provided for components that might be using useSession
export function useSession() {
  return {
    data: {
      user: {
        id: "demo-user",
        name: "Demo User",
        email: "demo@example.com",
      },
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
    },
    status: "authenticated",
    update: () => Promise.resolve(null),
  }
}
