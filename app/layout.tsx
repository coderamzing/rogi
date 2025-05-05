import type React from "react"
import "./globals.css"
import "./typing-animation.css"
import "./tour-highlight.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { PageGuideProvider } from "@/context/page-guide-context"
import { ChatProvider } from "@/context/chat-context"
import MainLayout from "@/components/main-layout"
import { AuthProvider } from "@/context/auth-context"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "ROGI - Smart Mortgage Rates",
  description: "Find the best mortgage rates in Canada with ROGI's AI-powered mortgage platform.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Providers>
            <AuthProvider>
              <ChatProvider>
                <PageGuideProvider>
                  <MainLayout>{children}</MainLayout>
                </PageGuideProvider>
              </ChatProvider>
            </AuthProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
