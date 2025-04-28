"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface SearchParamsHandlerProps {
  onParamsChange: (params: { [key: string]: string }) => void
}

export function SearchParamsHandler({ onParamsChange }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams) {
      const paramsObj: { [key: string]: string } = {}

      if (searchParams.has("propertyValue")) {
        paramsObj.propertyValue = searchParams.get("propertyValue") || ""
      }

      if (searchParams.has("downPayment")) {
        paramsObj.downPayment = searchParams.get("downPayment") || ""
      }

      onParamsChange(paramsObj)
    }
  }, [searchParams, onParamsChange])

  return null
}
