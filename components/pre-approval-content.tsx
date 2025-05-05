"use client"

import { Suspense } from "react"
import { PreApprovalForm } from "@/components/pre-approval-form"
import { CheckCircle, Brain, Zap, RefreshCw, Smartphone, BarChart3, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PreApprovalContent() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <section className="mb-16 bg-gradient-to-r from-purple-100 to-teal-100 rounded-xl p-8 md:p-12 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">Mortgage Pre-Approval</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-600">
            ROGI's Smart Advantage: AI-Powered Pre-Approvals
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            In today's fast-moving Canadian housing market, getting pre-approved is essential. At ROGI, our AI-powered
            process gives you the clarity, confidence, and competitive edge you need to act fast and make informed
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
              <Brain className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Live Pre-Approval Intelligence</h3>
              <p>
                As soon as interest rates change, ROGI's system recalculates your approval amount—automatically. You'll
                be notified instantly if your rate hold or maximum mortgage amount is affected.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
              <BarChart3 className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Real-Time Lender Matching</h3>
              <p>
                ROGI compares dozens of lenders, in real time, to find the best fit for your financial profile—not just
                the first one that says "yes."
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
              <RefreshCw className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Dynamic Reassessment</h3>
              <p>
                Need to tweak your budget? Change your down payment plan? Switch property types? ROGI lets you adjust
                and re-run your numbers instantly—no reapplying from scratch.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
              <Smartphone className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Fast, Paperless Process</h3>
              <p>Everything can be done online. No long calls, no stacks of paperwork, no waiting for days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Pre-Approval Section */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">What Is a Mortgage Pre-Approval?</h2>
          <p className="text-lg mb-6">
            A mortgage pre-approval is a detailed assessment of your financial situation. Unlike a quick
            pre-qualification that offers an estimate, a true pre-approval involves reviewing your documents, verifying
            income, checking your credit, and running real calculations to determine:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="bg-white border-teal-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-teal-500 flex justify-center">💰</div>
                <h3 className="font-bold mb-2">How much you can borrow</h3>
                <p className="text-gray-600">Know your exact budget before house hunting</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-teal-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-teal-500 flex justify-center">📉</div>
                <h3 className="font-bold mb-2">Your interest rate</h3>
                <p className="text-gray-600">See what rate you qualify for today</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-teal-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-teal-500 flex justify-center">📋</div>
                <h3 className="font-bold mb-2">Lender matching</h3>
                <p className="text-gray-600">Find lenders that fit your profile</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-teal-200 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-teal-500 flex justify-center">🔐</div>
                <h3 className="font-bold mb-2">Rate hold protection</h3>
                <p className="text-gray-600">Lock in your rate for up to 120 days</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg mt-6">
            With a solid pre-approval in hand, you'll be able to confidently make offers on homes, knowing your
            financing is already lined up.
          </p>
        </div>
      </section>

      {/* Why Pre-Approval Matters Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Why Pre-Approval Matters More Than Ever</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <CheckCircle className="text-teal-500 mr-4 h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Know Your Budget</h3>
              <p>
                Instead of guessing, you'll know your true purchase power—and avoid falling in love with a home you
                can't afford.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-teal-500 mr-4 h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Get a Competitive Edge</h3>
              <p>
                Sellers take pre-approved buyers more seriously, especially in hot markets where multiple offers are
                common.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-teal-500 mr-4 h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Protect Your Rate</h3>
              <p>
                If rates go up while you shop, your pre-approval locks in today's rate for up to 120 days. That
                protection could save you thousands.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-teal-500 mr-4 h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Plan With Confidence</h3>
              <p>
                Knowing your monthly payments, down payment requirements, and closing costs helps you make smart
                decisions—early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Approval vs Pre-Qualification Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          Pre-Approval vs. Pre-Qualification: Know the Difference
        </h2>

        <Tabs defaultValue="pre-approval" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pre-approval">Pre-Approval</TabsTrigger>
            <TabsTrigger value="pre-qualification">Pre-Qualification</TabsTrigger>
          </TabsList>
          <TabsContent value="pre-approval" className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-teal-600">Pre-Approval: The Gold Standard</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Thorough review of your financial documents</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Credit check and detailed income verification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Specific mortgage amount and rate</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Rate hold for up to 120 days</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Sellers and realtors take it seriously</span>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="pre-qualification" className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Pre-Qualification: Just an Estimate</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="text-gray-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Based only on information you provide</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-gray-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>No document verification or credit check</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-gray-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Rough estimate of what you might qualify for</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-gray-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>No rate hold or guarantee</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-gray-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Limited value when making offers</span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      {/* What You'll Need Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">What You'll Need to Get Pre-Approved</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">🆔</div>
              <h3 className="text-xl font-bold mb-3 text-center">Identification</h3>
              <ul className="space-y-2 text-sm">
                <li>Government-issued ID (passport, driver's license)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">💼</div>
              <h3 className="text-xl font-bold mb-3 text-center">Income Verification</h3>
              <ul className="space-y-2 text-sm">
                <li>Employees: Pay stubs + T4s</li>
                <li>Self-employed: T1 Generals + NOAs</li>
                <li>Pension/Retired: Statements + NOAs</li>
                <li>Rental/Passive Income: Supporting documents</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">🏦</div>
              <h3 className="text-xl font-bold mb-3 text-center">Assets & Down Payment</h3>
              <ul className="space-y-2 text-sm">
                <li>Bank statements (last 3 months)</li>
                <li>Investment accounts (TFSAs, RRSPs, etc.)</li>
                <li>Gift letters (if applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Property Details</h3>
              <ul className="space-y-2 text-sm">
                <li>Existing mortgage statement</li>
                <li>Property tax bill</li>
                <li>Rental agreements (if any)</li>
                <li>(If applicable)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          How to Start the ROGI Pre-Approval Process
        </h2>
        <p className="text-lg mb-8 text-center">With ROGI, the process is as simple as it is powerful:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl font-bold text-purple-800">
              1
            </div>
            <h3 className="font-bold mb-2">Estimate Your Numbers</h3>
            <p className="text-sm text-gray-600">
              Get an idea of your budget and monthly payments in seconds with our calculator.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl font-bold text-purple-800">
              2
            </div>
            <h3 className="font-bold mb-2">Complete Our Application</h3>
            <p className="text-sm text-gray-600">Our AI will instantly begin matching you with top lender options.</p>
          </div>

          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl font-bold text-purple-800">
              3
            </div>
            <h3 className="font-bold mb-2">Upload Documents</h3>
            <p className="text-sm text-gray-600">No need to print or scan—just secure uploads through your portal.</p>
          </div>

          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl font-bold text-purple-800">
              4
            </div>
            <h3 className="font-bold mb-2">Get Pre-Approved</h3>
            <p className="text-sm text-gray-600">Receive your official pre-approval and rate hold (up to 120 days).</p>
          </div>
        </div>
      </section>

      {/* Why ROGI is Better Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          Why ROGI Is Better Than Going Direct to a Bank
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <BarChart3 className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Access to Dozens of Lenders</h3>
              <p>Why limit yourself to one bank? ROGI brings the entire mortgage market to you—instantly.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <MessageCircle className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Personalized Mortgage Specialists</h3>
              <p>If you ever need a human touch, our specialists are here to guide you.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Zap className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Better Rates, Lower Payments</h3>
              <p>
                Studies show that mortgage brokers (like ROGI) help Canadians save up to 0.25% compared to bank-direct
                options.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Brain className="text-purple-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Speed, Simplicity, and Smarter Insights</h3>
              <p>Forget waiting days for a call back. ROGI runs 24/7 to keep your approval current and competitive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Pre-Approval with ROGI Today</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Your path to homeownership starts with clarity—and ROGI delivers it. Get pre-approved with the help of smart
          AI, real-time lender insights, and personalized support when you need it.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Use our calculator</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Apply online in minutes</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Speak to a Mortgage Specialist</span>
          </div>
        </div>
        <p className="font-bold">Be ready when the perfect home comes up. ROGI makes sure your financing is, too.</p>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Apply for Pre-Approval Now</h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Fill out the form below to start your pre-approval process. Our AI will immediately begin analyzing your
          information to match you with the best mortgage options.
        </p>

        <Suspense fallback={<div className="text-center p-8">Loading application form...</div>}>
          <PreApprovalForm />
        </Suspense>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          Pre-Approval FAQ: What You Might Be Wondering
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">
              Can I get pre-approved with less than 20% down?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes! In many cases, you can get pre-approved with as little as 5% down, depending on the property price
              and your credit profile.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">Will a pre-approval hurt my credit score?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              One credit check is standard and won't significantly impact your score—especially when done through a
              broker like ROGI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">What happens if rates change?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              With ROGI's dynamic alerts, you'll know immediately—and we'll reassess your file to keep you in the best
              possible position.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold">How long does pre-approval take?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              With ROGI's digital process, many clients receive their pre-approval within 24 hours of submitting their
              documentation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-bold">
              Is pre-approval the same as final approval?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              No. Pre-approval is the first step. Final approval comes after you've found a property and the lender has
              assessed both your finances and the specific property details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
