"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock calculation data
const MOCK_CALCULATION = {
  id: "calc-3",
  name: "Penalty Calculation",
  calculator_type: "penalty",
  created_at: "2023-05-01T10:00:00Z",
  data: {
    penaltyAmount: 5000,
    loanAmount: 100000,
    interestRate: 4.5,
    remainingTerm: 10,
    earlyTerminationFee: 3.5,
  },
}

export default function PenaltyCalculatorPage() {
  const searchParams = useSearchParams()
  const calculationId = searchParams.get("id")
  const [calculation, setCalculation] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching calculation data
    const fetchCalculation = async () => {
      setLoading(true)
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (calculationId) {
        setCalculation(MOCK_CALCULATION)
      } else {
        setCalculation(null)
      }

      setLoading(false)
    }

    fetchCalculation()
  }, [calculationId])

  const renderContent = () => {
    if (loading) {
      return <div className="text-center py-8">Loading calculation...</div>
    }

    if (!calculation) {
      return <div className="text-center py-8"><p>No calculation found. Please create a new calculation.</p></div>
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{calculation.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Penalty Amount:</span>
                <span>${calculation.data.penaltyAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Loan Amount:</span>
                <span>${calculation.data.loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interest Rate:</span>
                <span>{calculation.data.interestRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Remaining Term:</span>
                <span>{calculation.data.remainingTerm} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Early Termination Fee:</span>
                <span>{calculation.data.earlyTerminationFee}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Penalty Calculator</h1>

      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        {renderContent()}
      </Suspense>
    </div>
  )
}
