"use client"

import { Suspense } from "react"
import { PreApprovalForm } from "./pre-approval-form"

export function PreApprovalFormWrapper() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading form data...</div>}>
      <PreApprovalForm />
    </Suspense>
  )
}
