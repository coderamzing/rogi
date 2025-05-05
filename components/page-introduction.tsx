"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageIntroductionProps {
  title: string
  description: string
  ctaLink?: string
  ctaText?: string
}

export default function PageIntroduction({
  title,
  description,
  ctaLink = "/apply/pre-approval",
  ctaText = "Get Pre-Approved",
}: PageIntroductionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl mb-12">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] bg-opacity-40"></div>
      <div className="absolute right-0 top-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>

      <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:py-20 max-w-5xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            {title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-gilroy-black mb-4 text-gray-900 leading-tight">
                {title}
              </h1>
            )}
            {description && <p className="text-lg font-gilroy-ultralight text-gray-700 mb-6">{description}</p>}

            {ctaLink && (
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 font-medium">
                <Link href={ctaLink} className="inline-flex items-center">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl"></div>
            <div className="relative bg-white/80 p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="h-2 w-24 bg-purple-200 rounded-full"></div>
                <div className="h-2 w-32 bg-indigo-200 rounded-full"></div>
                <div className="h-2 w-20 bg-purple-200 rounded-full"></div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                  <div className="h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg"></div>
                </div>
                <div className="h-24 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-100 rounded-lg mt-2"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
