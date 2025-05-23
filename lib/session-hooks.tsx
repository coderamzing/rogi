"use client"

// Mock implementation that doesn't require providers
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
