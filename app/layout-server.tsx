import type React from "react"
import "./globals.css"
import "./typing-animation.css"
import "./tour-highlight.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageGuideProvider } from "@/context/page-guide-context"
import { ChatProvider } from "@/context/chat-context"
import MainLayout from "@/components/main-layout"
import { AuthProvider } from "@/context/auth-context"
import { SessionProvider } from "next-auth/react"
import localFont from "next/font/local"
import { metadata } from "./metadata"

// Import Gilroy font files
const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
})

export { metadata }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} font-gilroy`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SessionProvider>
            <AuthProvider>
              <ChatProvider>
                <PageGuideProvider>
                  <MainLayout>{children}</MainLayout>
                </PageGuideProvider>
              </ChatProvider>
            </AuthProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
