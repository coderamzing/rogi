"use client"

import { useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

interface SearchParamsClientProps {
  children: (searchParams: URLSearchParams) => ReactNode
}

export function SearchParamsClient({ children }: SearchParamsClientProps) {
  const searchParams = useSearchParams()
  return <>{children(searchParams)}</>
}
