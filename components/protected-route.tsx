import type React from "react"
// This is a simplified version that doesn't do any actual protection
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
