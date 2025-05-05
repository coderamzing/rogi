import type { Metadata } from "next"
import Layout from "@/components/layout"
import TermsOfServiceClient from "./TermsOfServiceClient"

export const metadata: Metadata = {
  title: "Terms of Service | ROGI",
  description: "Terms and conditions for using ROGI's mortgage services and platform.",
}

export default function TermsOfServicePage() {
  return (
    <Layout>
      <TermsOfServiceClient />
    </Layout>
  )
}
