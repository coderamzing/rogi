"use client"

import type React from "react"
import "./globals.css"
import "./typing-animation.css"
import "./tour-highlight.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PageGuideProvider } from "@/context/page-guide-context"
import { ChatProvider } from "@/context/chat-context"
import MainLayout from "@/components/main-layout"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ChatProvider>
            <PageGuideProvider>
              <MainLayout>{children}</MainLayout>
            </PageGuideProvider>
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
