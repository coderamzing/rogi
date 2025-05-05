"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

interface SearchParamsHandlerProps {
  onParamsChange: (params: { [key: string]: string }) => void
}

export function SearchParamsHandler({ onParamsChange }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams()
  const previousParamsRef = useRef<string>("")

  useEffect(() => {
    // Convert searchParams to a string for comparison
    const currentParamsString = searchParams.toString()

    // Only process if the params have actually changed
    if (previousParamsRef.current !== currentParamsString) {
      const params: { [key: string]: string } = {}
      let hasChanges = false

      searchParams.forEach((value, key) => {
        params[key] = value
        hasChanges = true
      })

      // Only call the callback if there are actual changes
      if (hasChanges) {
        onParamsChange(params)
      }

      // Update the ref with current params
      previousParamsRef.current = currentParamsString
    }
  }, [searchParams, onParamsChange])

  return null
}
