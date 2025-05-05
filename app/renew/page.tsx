"use client"

import Layout from "@/components/layout"
import RenewCalculator from "@/components/renew-calculator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RenewPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl mb-12 overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-gilroy-black text-sm">
                  Mortgage Renewal
                </div>
                <h1 className="text-4xl md:text-5xl font-gilroy-black leading-tight text-gray-900">
                  Renew Your Mortgage
                </h1>
                <p className="text-lg text-gray-600 font-gilroy-ultralight">
                  Is your mortgage term coming to an end? Explore your renewal options and find the best rates for your
                  situation. Use our renewal calculator below to see how much you could potentially save.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="px-6 py-3 bg-purple-700 text-white rounded-lg font-gilroy-black flex items-center justify-center hover:bg-purple-800 transition-colors"
                    onClick={() => {
                      document.getElementById("calculator-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <Link href="/contact">
                    <button className="px-6 py-3 border border-purple-300 text-purple-700 rounded-lg font-gilroy-black flex items-center justify-center hover:bg-purple-50 transition-colors">
                      Speak to a Specialist
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-300 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 mx-auto max-w-md">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-gilroy-black text-lg">Renewal Calculator</div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 my-4">
                      <div className="h-8 bg-purple-100 rounded-md"></div>
                      <div className="h-8 bg-purple-100 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                    <div className="h-10 bg-purple-600 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8" id="calculator-section">
          <RenewCalculator />
        </div>
        <div className="py-12">
          <h2 className="text-3xl font-gilroy-black text-center mb-12">Why Choose ROGI for Your Renewal</h2>

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-xl font-gilroy-black text-purple-700 mb-8 text-center">Benefits of Renewing with Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-gilroy-black text-lg mb-2">Competitive Rates</h4>
                <p className="text-gray-600">
                  Tailored to your financial situation, ensuring you get the best possible deal.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h4 className="font-gilroy-black text-lg mb-2">Flexible Terms</h4>
                <p className="text-gray-600">Customizable options that adapt to your needs and financial goals.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-gilroy-black text-lg mb-2">Expert Advice</h4>
                <p className="text-gray-600">
                  Guidance from our mortgage specialists to help you make informed decisions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-gilroy-black text-lg mb-2">Streamlined Process</h4>
                <p className="text-gray-600">Efficient and hassle-free renewal experience from start to finish.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-gilroy-black text-lg mb-2">Better Terms</h4>
                <p className="text-gray-600">Potential for improved conditions compared to your current mortgage.</p>
              </div>

              <div className="md:col-span-3">
                <div className="bg-purple-50 rounded-xl p-6 mt-4">
                  <div className="flex items-center">
                    <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 mr-4">
                      <Link href="/contact">Speak to a Mortgage Specialist</Link>
                    </Button>
                    <p className="text-purple-700 font-medium">Get personalized advice for your renewal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
