import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Get application data from request
    const applicationData = await request.json()

    // Validate required fields
    const requiredFields = [
      "propertyValue",
      "downPayment",
      "mortgageAmount",
      "interestRate",
      "amortizationPeriod",
      "paymentFrequency",
      "monthlyPayment",
    ]

    for (const field of requiredFields) {
      if (!applicationData[field] && applicationData[field] !== 0) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Mock a successful submission
    return NextResponse.json({
      success: true,
      applicationId: `mock-${Date.now()}`,
      message: "Application submitted successfully in demo mode",
    })
  } catch (error) {
    console.error("Error submitting application:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}
