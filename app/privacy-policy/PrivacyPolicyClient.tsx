"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Printer, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout";

const privacyPolicySections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `
      <p>We collect various types of information to provide and improve our services, including:</p>
      <ul>
        <li><strong>Personal information</strong> (e.g., name, email address, phone number)</li>
        <li><strong>Financial information</strong> (e.g., income, assets, debts)</li>
        <li><strong>Property information</strong> (for mortgage calculations and applications)</li>
        <li><strong>Usage data</strong> (e.g., how you interact with our website)</li>
      </ul>
    `,
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: `
      <p>We use the collected information for various purposes, including:</p>
      <ul>
        <li>Providing and maintaining our services</li>
        <li>Processing mortgage applications and calculations</li>
        <li>Communicating with you about our services</li>
        <li>Improving our website and user experience</li>
        <li>Complying with legal obligations</li>
      </ul>
    `,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `
      <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
      <ul>
        <li>Encryption of sensitive data</li>
        <li>Regular security assessments</li>
        <li>Employee training on data protection</li>
        <li>Access controls to limit data exposure</li>
      </ul>
      <p>While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. No method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
    `,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `
      <p>You have certain rights regarding your personal information, including:</p>
      <ul>
        <li>The right to access your personal data</li>
        <li>The right to rectify inaccurate information</li>
        <li>The right to erasure (the "right to be forgotten")</li>
        <li>The right to restrict processing</li>
        <li>The right to data portability</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the information provided at the end of this Privacy Policy.</p>
    `,
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: `
      <p>We may use third-party services that collect, monitor and analyze data. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
      <p>Our service providers include:</p>
      <ul>
        <li>Analytics providers (e.g., Google Analytics)</li>
        <li>Customer relationship management systems</li>
        <li>Email service providers</li>
        <li>Hosting and cloud infrastructure providers</li>
      </ul>
    `,
  },
  {
    id: "cookies-tracking",
    title: "Cookies and Tracking",
    content: `
      <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li>To maintain your session and remember your preferences</li>
        <li>To understand how you use our website</li>
        <li>To personalize your experience</li>
        <li>To improve our services based on your usage patterns</li>
      </ul>
    `,
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: `
      <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we can take necessary actions.</p>
    `,
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Privacy Policy",
    content: `
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    `,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: `
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: privacy@rogi.com</li>
        <li>By phone: +1 (507) 554 5238</li>
        <li>By mail: 123 Financial Street, Suite 400, Toronto, ON M5V 2K7</li>
      </ul>
    `,
  },
];

export default function PrivacyPolicyClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Filter sections based on search term
  const filteredSections = searchTerm
    ? privacyPolicySections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : privacyPolicySections;

  // Handle scroll events to update active section and show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sectionPositions = privacyPolicySections.map((section) => {
        const element = sectionRefs.current[section.id];
        if (!element) return { id: section.id, position: 0 };
        return {
          id: section.id,
          position: element.getBoundingClientRect().top,
        };
      });

      // Find the section closest to the top of the viewport
      const currentSection = sectionPositions
        .filter((section) => section.position <= 100)
        .sort((a, b) => b.position - a.position)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (sectionPositions.length > 0) {
        setActiveSection(sectionPositions[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section when clicking on table of contents
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Handle print functionality
  const handlePrint = () => {
    window.print();
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 print:py-4">
        {/* Header */}
        <div className="mb-8 print:mb-4">
          <h1 className="text-4xl font-gilroy-black mb-4 print:text-3xl">
            ROGI Privacy Policy
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-muted-foreground print:hidden">
            <p>Last updated: May 1, 2025</p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={handlePrint}
              >
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-lg max-w-3xl">
            At ROGI, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your data when
            you use our website and services.
          </p>
        </div>

        {/* Search bar - hidden when printing */}
        <div className="mb-8 print:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search privacy policy..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Main content with sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of contents - hidden when printing and on mobile */}
          <div className="lg:w-1/4 print:hidden">
            <div className="sticky top-24 border rounded-lg p-4 bg-card">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <nav>
                <ul className="space-y-2">
                  {privacyPolicySections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left w-full px-2 py-1 rounded text-sm hover:bg-accent transition-colors ${
                          activeSection === section.id
                            ? "bg-accent font-medium"
                            : ""
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
            {filteredSections.length > 0 ? (
              <div className="space-y-6">
                {filteredSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    ref={(el: HTMLElement | null) => {
                      if (el) {
                        sectionRefs.current[section.id] = el;
                      }
                    }}
                    className="scroll-mt-24"
                  >
                    <div className="border rounded-lg overflow-hidden bg-card print:border-none print:bg-transparent">
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue={section.id}
                        className="w-full"
                      >
                        <AccordionItem
                          value={section.id}
                          className="border-none"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors">
                            <h2 className="text-xl font-semibold text-left">
                              {section.title}
                            </h2>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <div
                              className="prose max-w-none"
                              dangerouslySetInnerHTML={{
                                __html: section.content,
                              }}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-lg text-muted-foreground">
                  No sections match your search. Please try different keywords.
                </p>
              </div>
            )}

            {/* Contact information */}
            <div className="mt-12 border-t pt-8 print:mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Questions About Our Privacy Policy?
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about our privacy
                practices, please contact our Privacy Officer at{" "}
                <a
                  href="mailto:privacy@rogi.com"
                  className="text-primary underline"
                >
                  privacy@rogi.com
                </a>{" "}
                or call us at +1 (507) 554 5238.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to top button - hidden when printing */}
        {showScrollTop && (
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-8 right-8 rounded-full shadow-lg print:hidden"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        )}
      </div>
    </Layout>
  );
}
