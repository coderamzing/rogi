"use client"

import type React from "react"

// Completely empty provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// Empty useAuth hook if needed
export function useAuth() {
  return {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    isAuthenticated: true,
  }
}
