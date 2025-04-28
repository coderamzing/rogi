"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatProvider } from "@/context/chat-context"
import { PageGuideProvider } from "@/context/page-guide-context"

// Simple wrapper without any auth
export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ChatProvider>
        <PageGuideProvider>{children}</PageGuideProvider>
      </ChatProvider>
    </ThemeProvider>
  )
}
