"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSearchParams } from "next/navigation"

type SearchParamsContextType = {
  searchParams: URLSearchParams | null
}

const SearchParamsContext = createContext<SearchParamsContextType>({
  searchParams: null,
})

export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()

  return <SearchParamsContext.Provider value={{ searchParams }}>{children}</SearchParamsContext.Provider>
}

export function useSearchParamsContext() {
  return useContext(SearchParamsContext)
}
