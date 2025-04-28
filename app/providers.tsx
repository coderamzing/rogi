"use client"

import type React from "react"

// Completely empty provider that just returns children
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
