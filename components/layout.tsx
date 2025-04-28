"use client"

import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  // This component is now just a pass-through with no authentication
  return <>{children}</>
}
