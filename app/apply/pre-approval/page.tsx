import { Suspense } from "react"
import { PreApprovalContent } from "@/components/pre-approval-content"

export default function PreApprovalPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading pre-approval page...</div>}>
      <PreApprovalContent />
    </Suspense>
  )
}
