"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md w-full p-8 border rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Demo Mode</h1>
        <p className="mb-6 text-center text-muted-foreground">
          This is a demo application. No authentication required.
        </p>
        <Button className="w-full" onClick={() => router.push("/dashboard")}>
          Continue to Dashboard
        </Button>
      </div>
    </div>
  )
}
