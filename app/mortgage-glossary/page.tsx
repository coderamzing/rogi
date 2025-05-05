"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Book, HelpCircle, FileText, ArrowRight, Bookmark, Filter, Calculator } from "lucide-react"

const glossaryTerms = [
  {
    term: "Amortization",
    definition:
      "The process of paying off a debt (often a mortgage) through regular payments over time. This includes both principal and interest payments.",
    category: "Basics",
  },
  {
    term: "Down Payment",
    definition:
      "The initial upfront portion of the total amount due when purchasing a home, typically expressed as a percentage of the home's purchase price.",
    category: "Basics",
  },
  {
    term: "Fixed-Rate Mortgage",
    definition:
      "A mortgage where the interest rate remains the same for the entire term of the loan, providing predictable payments.",
    category: "Types",
  },
  {
    term: "Variable-Rate Mortgage",
    definition:
      "A mortgage where the interest rate can fluctuate based on market conditions, often tied to the lender's prime rate.",
    category: "Types",
  },
  {
    term: "Principal",
    definition: "The original amount of money borrowed in a loan, not including interest.",
    category: "Basics",
  },
  {
    term: "Interest",
    definition: "The cost of borrowing money, typically expressed as a percentage of the loan amount.",
    category: "Basics",
  },
  {
    term: "Term",
    definition:
      "The length of time that the mortgage contract, including the interest rate, is in effect. Common terms are 1, 3, or 5 years.",
    category: "Basics",
  },
  {
    term: "Prepayment Penalty",
    definition:
      "A fee charged by some lenders if you pay off your mortgage before the end of the term or make extra payments beyond your allowed prepayment privileges.",
    category: "Fees",
  },
  {
    term: "Refinancing",
    definition:
      "The process of replacing an existing mortgage with a new one, often to take advantage of lower interest rates or to access home equity.",
    category: "Process",
  },
  {
    term: "Renewal",
    definition:
      "The process of extending your mortgage for a new term at the end of your current term, often with the opportunity to change your mortgage terms or switch lenders.",
    category: "Process",
  },
  {
    term: "Loan-to-Value (LTV) Ratio",
    definition: "The ratio of the mortgage amount to the appraised value of the property, expressed as a percentage.",
    category: "Calculations",
  },
  {
    term: "Mortgage Insurance",
    definition:
      "Insurance that protects the lender in case the borrower defaults on the loan. It's typically required for high-ratio mortgages (LTV > 80%).",
    category: "Insurance",
  },
  {
    term: "Closing Costs",
    definition:
      "Various expenses associated with buying a home, such as legal fees, land transfer taxes, and title insurance.",
    category: "Fees",
  },
  {
    term: "Pre-approval",
    definition:
      "A process where a lender provides a conditional commitment for a specific mortgage amount before you've found a home to purchase.",
    category: "Process",
  },
  {
    term: "Debt Service Ratio",
    definition:
      "A measure used by lenders to determine your ability to manage monthly payments and repay the money you have borrowed.",
    category: "Calculations",
  },
]

const categories = ["All", "Basics", "Types", "Process", "Fees", "Calculations", "Insurance"]

const faqItems = [
  {
    question: "What's the difference between a fixed and variable rate mortgage?",
    answer:
      "A fixed-rate mortgage has an interest rate that remains constant throughout the term, while a variable-rate mortgage has an interest rate that can fluctuate based on market conditions.",
  },
  {
    question: "How much down payment do I need to buy a home?",
    answer:
      "In Canada, the minimum down payment is 5% for homes priced up to $500,000. For homes priced between $500,000 and $999,999, it's 5% of the first $500,000 and 10% of the remaining portion. For homes $1 million or more, the minimum down payment is 20%.",
  },
  {
    question: "What is mortgage default insurance?",
    answer:
      "Mortgage default insurance is required for high-ratio mortgages (down payment less than 20%) and protects the lender if the borrower defaults on the loan.",
  },
  {
    question: "How often can I renew my mortgage?",
    answer:
      "You can renew your mortgage at the end of each term. Terms typically range from 1 to 10 years, with 5-year terms being the most common.",
  },
  {
    question: "What's the difference between renewing and refinancing?",
    answer:
      "Renewing is extending your mortgage for a new term at the end of your current term, often with the same lender. Refinancing involves replacing your current mortgage with a new one, potentially with a different lender, different terms, or a different loan amount.",
  },
]

const quickLinks = [
  { title: "Mortgage Calculator", icon: Calculator, href: "/calculators/mortgage" },
  { title: "Refinance Calculator", icon: Calculator, href: "/calculators/refinance" },
  { title: "Apply for a Mortgage", icon: FileText, href: "/apply" },
  { title: "Current Rates", icon: Calculator, href: "/rates" },
]

export default function MortgageGlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter glossary terms based on selected category
  const filteredTerms =
    selectedCategory === "All" ? glossaryTerms : glossaryTerms.filter((term) => term.category === selectedCategory)

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <Book className="w-4 h-4 mr-2" />
              Mortgage Knowledge Base
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gilroy-black text-center mb-6">Mortgage Glossary</h1>

          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Demystifying mortgage terminology to help you make informed decisions about your home financing journey.
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href={link.href} className="flex items-center text-primary hover:text-primary/80">
                    <link.icon className="h-5 w-5 mr-2" />
                    <span className="font-medium">{link.title}</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="glossary" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-2 rounded-lg gap-2 min-h-[60px] border border-gray-200">
            <TabsTrigger
              value="glossary"
              className="text-lg py-2 px-3 rounded-md data-[state=active]:bg-white whitespace-nowrap"
            >
              <Book className="w-5 h-5 mr-2" />
              Glossary
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="text-lg py-2 px-3 rounded-md data-[state=active]:bg-white whitespace-nowrap"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="glossary" className="mt-6">
            <div className="mb-8">
              <h2 className="text-3xl font-gilroy-black mb-6">Mortgage Terminology</h2>
              <p className="text-gray-600 mb-8">
                Understanding these key mortgage terms will help you navigate the home buying process with confidence.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Filter className="h-5 w-5 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500 mr-2">Filter by:</span>
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className={category === selectedCategory ? "" : "border-gray-200"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Glossary Terms */}
              <div className="grid gap-4 mb-8">
                {filteredTerms.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredTerms.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`glossary-item-${index}`}
                        className="border border-gray-100 rounded-lg mb-4 overflow-hidden shadow-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 data-[state=open]:bg-gray-50">
                          <div className="flex items-center">
                            <span className="text-xl font-gilroy-black">{item.term}</span>
                            <span className="ml-3 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                              {item.category}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-white border-t border-gray-100">
                          <p className="text-gray-700 font-gilroy-ultralight">{item.definition}</p>
                          <div className="mt-4 flex justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary/80 hover:bg-primary/5"
                            >
                              <Bookmark className="h-4 w-4 mr-2" />
                              Save Term
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No terms found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div>
              <h2 className="text-3xl font-gilroy-black mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Get answers to common questions about mortgages, financing, and the home buying process.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-item-${index}`}
                    className="border border-gray-100 rounded-lg mb-4 overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 data-[state=open]:bg-gray-50">
                      <span className="text-xl font-gilroy-black text-left">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white border-t border-gray-100">
                      <p className="text-gray-700 font-gilroy-ultralight">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-gilroy-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8">
              Our mortgage experts are ready to help you understand your options and find the best mortgage solution for
              your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Contact an Expert</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/calculators">Try Our Calculators</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
