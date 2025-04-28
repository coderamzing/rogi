"use client"

// Global stub implementations for authentication hooks
// These don't require any providers and will work anywhere in the app

export function useSession() {
  return {
    data: {
      user: {
        id: "demo-user",
        name: "Demo User",
        email: "demo@example.com",
      },
      expires: "2099-01-01T00:00:00.000Z",
    },
    status: "authenticated" as const,
    update: () => Promise.resolve(null),
  }
}

export function useAuth() {
  return {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    isAuthenticated: true,
    login: () => {},
    logout: () => {},
  }
}

// Mock next-auth signIn and signOut functions
export function signIn() {
  return Promise.resolve({ ok: true, error: null })
}

export function signOut() {
  return Promise.resolve(true)
}
