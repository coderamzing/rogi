import { Suspense } from "react"
import { PreApprovalForm } from "@/components/pre-approval-form"

export default function PreApprovalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mortgage Pre-Approval Application</h1>
      <p className="text-gray-600 mb-8">
        Get pre-approved for a mortgage to know exactly how much you can afford and show sellers you're a serious buyer.
      </p>

      <Suspense fallback={<div>Loading form...</div>}>
        <PreApprovalForm />
      </Suspense>
    </div>
  )
}
