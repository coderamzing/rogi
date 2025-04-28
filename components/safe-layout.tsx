import type React from "react"

// This component is now just a pass-through with no authentication
export default function SafeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
