import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | ROGI",
  description: "Learn how ROGI collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
