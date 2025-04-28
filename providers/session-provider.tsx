"use client"

import type React from "react"

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

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
