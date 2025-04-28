"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PageGuideContextType {
  isGuideOpen: boolean
  openGuide: () => void
  closeGuide: () => void
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
  setTotalSteps: (steps: number) => void
  guideTitle: string
  setGuideTitle: (title: string) => void
  guideDescription: string
  setGuideDescription: (description: string) => void
}

const PageGuideContext = createContext<PageGuideContextType | undefined>(undefined)

export function PageGuideProvider({ children }: { children: ReactNode }) {
  const [isGuideOpen, setIsGuideOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(0)
  const [guideTitle, setGuideTitle] = useState("")
  const [guideDescription, setGuideDescription] = useState("")

  const openGuide = () => setIsGuideOpen(true)
  const closeGuide = () => setIsGuideOpen(false)

  return (
    <PageGuideContext.Provider
      value={{
        isGuideOpen,
        openGuide,
        closeGuide,
        currentStep,
        setCurrentStep,
        totalSteps,
        setTotalSteps,
        guideTitle,
        setGuideTitle,
        guideDescription,
        setGuideDescription,
      }}
    >
      {children}
    </PageGuideContext.Provider>
  )
}

export function usePageGuide() {
  const context = useContext(PageGuideContext)
  if (context === undefined) {
    throw new Error("usePageGuide must be used within a PageGuideProvider")
  }
  return context
}
