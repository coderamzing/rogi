"use client"

import Layout from "@/components/layout"
import MortgageCalculator from "@/components/mortgage-calculator"
import Link from "next/link"

export default function PurchasePage() {
  const scrollToCalculator = () => {
    document.getElementById("calculator-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl mb-12 overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-gilroy-black text-sm">
                  Home Purchase
                </div>
                <h1 className="text-4xl md:text-5xl font-gilroy-black leading-tight text-gray-900">
                  Purchase a Home / Mortgage Calculator
                </h1>
                <p className="text-lg text-gray-600 font-gilroy-ultralight">
                  Buying a home is an exciting journey. Use our mortgage calculator below to estimate your monthly
                  payments, see how much you can afford, and calculate various scenarios for your mortgage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToCalculator}
                    className="px-6 py-3 bg-purple-700 text-white rounded-lg font-gilroy-black flex items-center justify-center hover:bg-purple-800 transition-colors"
                  >
                    Calculate Now
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
                  <Link href="/apply/pre-approval">
                    <button className="px-6 py-3 border border-purple-300 text-purple-700 rounded-lg font-gilroy-black flex items-center justify-center hover:bg-purple-50 transition-colors">
                      Get Pre-Approved
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-300 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 mx-auto max-w-md">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-gilroy-black text-lg">Mortgage Calculator</div>
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
        <div id="calculator-section" className="bg-white shadow-md rounded-lg p-6 mb-8">
          <MortgageCalculator />
        </div>
        <div className="py-12">
          <h2 className="text-3xl font-gilroy-black text-center mb-12">Why Choose ROGI for Your Purchase</h2>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
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
              <h3 className="text-xl font-gilroy-bold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                Access the best mortgage rates from top lenders across Canada to maximize your savings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
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
              <h3 className="text-xl font-gilroy-bold mb-2">Personalized Advice</h3>
              <p className="text-gray-600">
                Get expert guidance tailored to your unique financial situation and homebuying goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-gilroy-bold mb-2">Streamlined Process</h3>
              <p className="text-gray-600">
                Enjoy a hassle-free mortgage application process with fast approvals and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
