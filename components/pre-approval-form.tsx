"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { SearchParamsHandler } from "./search-params-handler"

export function PreApprovalForm() {
  const router = useRouter()

  // Initialize with default values
  const [formData, setFormData] = useState({
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

  const handleParamsChange = useCallback((params: { [key: string]: string }) => {
    setFormData((prev) => ({
      ...prev,
      ...params,
    }))
  }, [])

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

  return (
    <Card>
      <CardContent className="p-6">
        <SearchParamsHandler onParamsChange={handleParamsChange} />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="income">Annual Income ($)</Label>
              <Input id="income" name="income" type="number" value={formData.income} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => handleSelectChange("propertyType", value)}
              >
                <SelectTrigger>
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
              <Label htmlFor="propertyValue">Estimated Property Value ($)</Label>
              <Input
                id="propertyValue"
                name="propertyValue"
                type="number"
                value={formData.propertyValue}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="downPayment">Down Payment ($)</Label>
              <Input
                id="downPayment"
                name="downPayment"
                type="number"
                value={formData.downPayment}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="creditScore">Credit Score Range</Label>
              <Select value={formData.creditScore} onValueChange={(value) => handleSelectChange("creditScore", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select credit score range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (750+)</SelectItem>
                  <SelectItem value="good">Good (700-749)</SelectItem>
                  <SelectItem value="fair">Fair (650-699)</SelectItem>
                  <SelectItem value="poor">Poor (below 650)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
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

          <Button type="submit" className="w-full">
            Submit Pre-Approval Application
          </Button>

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you authorize us to verify the information provided and perform a soft credit check
            that won't affect your credit score.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
