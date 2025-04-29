"use client"

import { useRouter } from "next/navigation"
import { Suspense, useEffect } from "react"

export default function SignOut() {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return (
    <Suspense >
      
    <div className="flex min-h-screen items-center justify-center">
      <p>Demo mode: Redirecting to home page...</p>
    </div>
    </Suspense>
  )
}
