"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchParamsProvider } from "./search-params-provider"
import { useSearchParamsData } from "./use-search-params-data"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  income: string
  propertyType: string
  propertyValue: string
  downPayment: string
  creditScore: string
  agreeToTerms: boolean
}

function PreApprovalFormContent() {
  const router = useRouter()
  const { searchParamsData } = useSearchParamsData()
  const [step, setStep] = useState(1)

  // Initialize with default values
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    income: "",
    propertyType: "single-family",
    propertyValue: "",
    downPayment: "",
    creditScore: "good",
    agreeToTerms: false,
  })

  // Update form data when search params change
  useEffect(() => {
    if (searchParamsData) {
      setFormData((prev) => ({
        ...prev,
        income: searchParamsData.income || prev.income,
        propertyType: searchParamsData.propertyType || prev.propertyType,
        propertyValue: searchParamsData.propertyValue || prev.propertyValue,
        downPayment: searchParamsData.downPayment || prev.downPayment,
        creditScore: searchParamsData.creditScore || prev.creditScore,
      }))
    }
  }, [searchParamsData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would submit the form data to an API
    console.log("Form submitted:", formData)

    // Redirect to success page
    router.push("/apply/confirmation")
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <Card className="border-teal-200 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs value={`step-${step}`} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="step-1" disabled>
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="step-2" disabled>
                Property Details
              </TabsTrigger>
              <TabsTrigger value="step-3" disabled>
                Financial Info
              </TabsTrigger>
            </TabsList>

            {step === 1 && (
              <TabsContent value="step-1" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                    Next Step
                  </Button>
                </div>
              </TabsContent>
            )}

            {step === 2 && (
              <TabsContent value="step-2" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="font-medium">
                      Property Type
                    </Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => handleSelectChange("propertyType", value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-teal-500 focus:ring-teal-500">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyValue" className="font-medium">
                      Estimated Property Value ($)
                    </Label>
                    <Input
                      id="propertyValue"
                      name="propertyValue"
                      type="number"
                      value={formData.propertyValue}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="font-medium">
                      Down Payment ($)
                    </Label>
                    <Input
                      id="downPayment"
                      name="downPayment"
                      type="number"
                      value={formData.downPayment}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button type="button" onClick={prevStep} variant="outline">
                    Previous Step
                  </Button>
                  <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                    Next Step
                  </Button>
                </div>
              </TabsContent>
            )}

            {step === 3 && (
              <TabsContent value="step-3" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="income" className="font-medium">
                      Annual Income ($)
                    </Label>
                    <Input
                      id="income"
                      name="income"
                      type="number"
                      value={formData.income}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="creditScore" className="font-medium">
                      Credit Score Range
                    </Label>
                    <Select
                      value={formData.creditScore}
                      onValueChange={(value) => handleSelectChange("creditScore", value)}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-teal-500 focus:ring-teal-500">
                        <SelectValue placeholder="Select credit score range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent (750+)</SelectItem>
                        <SelectItem value="good">Good (700-749)</SelectItem>
                        <SelectItem value="fair">Fair (650-699)</SelectItem>
                        <SelectItem value="poor">Below 650</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the terms and conditions and consent to a credit check
                  </Label>
                </div>

                <div className="flex justify-between">
                  <Button type="button" onClick={prevStep} variant="outline">
                    Previous Step
                  </Button>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={!formData.agreeToTerms}>
                    Submit Application
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you authorize us to verify the information provided and perform a soft credit
                  check that won't affect your credit score.
                </p>
              </TabsContent>
            )}
          </Tabs>
        </form>
      </CardContent>
    </Card>
  )
}

export function PreApprovalForm() {
  return (
    <SearchParamsProvider>
      <PreApprovalFormContent />
    </SearchParamsProvider>
  )
}
