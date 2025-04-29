"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock application data for demo
const mockApplications = {
  app1: {
    id: "app1",
    status: "In Progress",
    createdAt: "2023-04-15",
    propertyValue: 500000,
    downPayment: 100000,
    mortgageAmount: 400000,
    interestRate: 4.25,
    amortizationPeriod: 25,
    paymentFrequency: "Monthly",
    monthlyPayment: 2150.28,
    propertyAddress: "123 Main St, Toronto, ON",
    propertyType: "Single Family Home",
    notes: "Pre-approval required for upcoming open house.",
  },
  app2: {
    id: "app2",
    status: "Approved",
    createdAt: "2023-03-22",
    propertyValue: 750000,
    downPayment: 150000,
    mortgageAmount: 600000,
    interestRate: 3.75,
    amortizationPeriod: 30,
    paymentFrequency: "Bi-weekly",
    monthlyPayment: 2780.42,
    propertyAddress: "456 Oak Ave, Vancouver, BC",
    propertyType: "Condo",
    notes: "Rate hold expires in 90 days.",
  },
  app3: {
    id: "app3",
    status: "Pending",
    createdAt: "2023-04-01",
    propertyValue: 620000,
    downPayment: 170000,
    mortgageAmount: 450000,
    interestRate: 4.0,
    amortizationPeriod: 25,
    paymentFrequency: "Monthly",
    monthlyPayment: 2365.78,
    propertyAddress: "789 Pine St, Calgary, AB",
    propertyType: "Townhouse",
    notes: "Waiting for appraisal results.",
  },
}

interface Application {
  id: string
  status: string
  createdAt: string
  propertyValue: number
  downPayment: number
  mortgageAmount: number
  interestRate: number
  amortizationPeriod: number
  paymentFrequency: string
  monthlyPayment: number
  propertyAddress?: string
  propertyType?: string
  notes?: string
}

export default async function ApplicationDetails({ params }: { params:Promise< { slug: string }> }) {
  const router = useRouter()
  const [application, setApplication] = useState<Application | null>(null)
  const [isLoadingApplication, setIsLoadingApplication] = useState(true)

  const resolvedParams = await params
  useEffect(() => {
    // In demo mode, we just fetch from our mock data
    const fetchMockApplication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate loading

      const app = mockApplications[resolvedParams.slug as keyof typeof mockApplications] || null
      setApplication(app)
      setIsLoadingApplication(false)
    }

    fetchMockApplication()
  }, [resolvedParams.slug])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(value)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "pending":
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  if (isLoadingApplication) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!application) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Application not found</h1>
        <Button onClick={() => router.push("/dashboard")}>Return to Dashboard</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Demo Banner */}
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
        <p className="text-amber-700 text-sm">Demo Mode - This is sample application data</p>
      </div>

      <div className="flex items-center mb-6">
        <Button variant="outline" onClick={() => router.push("/dashboard")} className="mr-4">
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Application Details</h1>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <CardTitle>Mortgage Application</CardTitle>
            <Badge className={getStatusColor(application.status)}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-gray-500">Submitted on {new Date(application.createdAt).toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>{/* Rest of the content remains the same */}</CardContent>
      </Card>
    </div>
  )
}
