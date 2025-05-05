"use client"

import { useEffect, useState } from "react"
import { useSearchParamsContext } from "./search-params-provider"

type SearchParamsData = {
  income?: string
  propertyType?: string
  propertyValue?: string
  downPayment?: string
  creditScore?: string
}

export function useSearchParamsData() {
  const { searchParams } = useSearchParamsContext()
  const [searchParamsData, setSearchParamsData] = useState<SearchParamsData | null>(null)

  useEffect(() => {
    if (!searchParams) return

    setSearchParamsData({
      income: searchParams.get("income") || undefined,
      propertyType: searchParams.get("propertyType") || undefined,
      propertyValue: searchParams.get("propertyValue") || undefined,
      downPayment: searchParams.get("downPayment") || undefined,
      creditScore: searchParams.get("creditScore") || undefined,
    })
  }, [searchParams])

  return { searchParamsData }
}
