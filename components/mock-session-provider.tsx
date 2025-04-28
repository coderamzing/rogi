import type React from "react"

// Completely empty provider
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// Empty useSession hook if needed
export function useSession() {
  return {
    data: {
      user: {
        id: "demo-user",
        name: "Demo User",
        email: "demo@example.com",
      },
    },
    status: "authenticated",
  }
}
