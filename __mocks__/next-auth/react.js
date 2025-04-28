// Mock all next-auth/react functionality to work without providers
import { mockSession } from "@/lib/auth-stub"

export function useSession() {
  return mockSession
}

export function signIn() {
  return Promise.resolve({ ok: true, error: null })
}

export function signOut() {
  return Promise.resolve(true)
}

export function getSession() {
  return Promise.resolve(mockSession.data)
}

export function getCsrfToken() {
  return Promise.resolve("mock-csrf-token")
}

export function getProviders() {
  return Promise.resolve({
    google: {
      id: "google",
      name: "Google",
      type: "oauth",
    },
  })
}

export function SessionProvider({ children }) {
  return children
}
