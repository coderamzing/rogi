"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Printer, ArrowUp, Clock } from "lucide-react"
import { useState } from "react"

const termsOfServiceSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `
      <p>By accessing or using LendGenius services, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
    `,
  },
  {
    id: "use-of-services",
    title: "Use of Services",
    content: `
      <p>Our services are intended for informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
    `,
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: `
      <p>You are responsible for:</p>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Ensuring that all information you provide to us is accurate and up-to-date</li>
        <li>Maintaining the confidentiality of your account and password</li>
        <li>Restricting access to your computer or mobile device</li>
        <li>Accepting responsibility for all activities that occur under your account or password</li>
      </ul>
    `,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `
      <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited without our express written permission.</p>
    `,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: `
      <p>In no event shall LendGenius be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of the site or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.</p>
    `,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `
      <p>These Terms shall be governed and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.</p>
    `,
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: `
      <p>We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting a notice on our website. Your continued use of the site after changes are posted constitutes your acceptance of the amended terms.</p>
    `,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `
      <p>Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms of Service, explains how we collect, use, and protect your personal information. By using our services, you consent to the data practices described in our Privacy Policy.</p>
      <p class="mt-2">For more details, please review our complete <a href="/privacy-policy" class="text-primary underline">Privacy Policy</a>.</p>
    `,
  },
  {
    id: "termination",
    title: "Termination",
    content: `
      <p>We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including but not limited to a breach of the Terms.</p>
      <p class="mt-2">Upon termination, your right to use the services will immediately cease. If you wish to terminate your account, you may simply discontinue using the services.</p>
    `,
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `
      <p>If you have any questions about these Terms of Service, please contact us at:</p>
      <p class="mt-2">Email: <a href="mailto:legal@rogi.com" class="text-primary underline">legal@rogi.com</a></p>
      <p>Phone: 1-800-ROGI-123</p>
      <p>Address: 123 Financial Street, Toronto, ON M5V 3E4, Canada</p>
    `,
  },
]

export default function TermsOfServiceClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeSection, setActiveSection] = useState("")

  // Filter sections based on search term
  const filteredSections = searchTerm
    ? termsOfServiceSections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : termsOfServiceSections

  // Handle print functionality
  const handlePrint = () => {
    window.print()
  }

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header section */}
      <div className="mb-12">
        <h1 className="text-4xl font-gilroy-black text-primary mb-4">Terms of Service</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>Last updated: April 15, 2023</span>
        </div>
        <p className="text-lg mb-8 max-w-3xl">
          Welcome to ROGI. By using our website and services, you agree to comply with and be bound by the following
          terms and conditions of use. Please review these terms carefully.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={handlePrint} className="print:hidden">
            <Printer className="mr-2 h-4 w-4" />
            Print Terms
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Table of contents - hidden on print and mobile */}
        <div className="lg:w-1/4 print:hidden hidden lg:block">
          <div className="sticky top-24 bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {termsOfServiceSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full px-2 py-1 rounded hover:bg-accent transition-colors ${
                        activeSection === section.id ? "bg-accent text-accent-foreground font-medium" : ""
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          {filteredSections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No terms found matching "{searchTerm}"</p>
              <Button variant="link" onClick={() => setSearchTerm("")} className="mt-2">
                Clear search
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-6">
              {filteredSections.map((section, index) => (
                <AccordionItem
                  key={section.id}
                  value={`item-${index}`}
                  id={section.id}
                  className="border rounded-lg overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 font-gilroy-black text-xl">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {/* Contact section */}
          <div className="mt-12 bg-secondary/50 rounded-lg p-8 border">
            <h2 className="text-2xl font-gilroy-black mb-4">Questions About Our Terms?</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact our legal team at{" "}
              <a href="mailto:legal@rogi.com" className="text-primary underline">
                legal@rogi.com
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy-policy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - hidden on print */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors print:hidden"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-8">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold">ROGI Terms of Service</h2>
            <p className="text-sm text-muted-foreground">Printed on: {new Date().toLocaleDateString()}</p>
          </div>
          <p className="text-sm">www.rogi.com/terms-of-service</p>
        </div>
      </div>
    </div>
  )
}
