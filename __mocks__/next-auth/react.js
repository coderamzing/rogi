// Import our mock session hook
import { useMockSession } from "@/components/mock-session-provider"

// Export it as useSession so components importing from next-auth/react will use our mock
export const useSession = useMockSession

// Mock session provider that just renders children without making API calls
export const SessionProvider = ({ children }) => children

// Mock authentication functions
export const signIn = () => Promise.resolve({ ok: true, error: null })
export const signOut = () => Promise.resolve(true)
export const getSession = () =>
  Promise.resolve({
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    expires: "2099-12-31T23:59:59.999Z",
  })

export const getCsrfToken = () => Promise.resolve("mock-csrf-token")
export const getProviders = () =>
  Promise.resolve({
    google: {
      id: "google",
      name: "Google",
      type: "oauth",
    },
  })
