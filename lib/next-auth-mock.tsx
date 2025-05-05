// Mock implementation of next-auth/react
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
    status: "authenticated",
  }
}

export function signIn() {
  return Promise.resolve({ ok: true, error: null })
}

export function signOut() {
  return Promise.resolve(true)
}

export function getCsrfToken() {
  return Promise.resolve("mock-csrf-token")
}

export function getProviders() {
  return Promise.resolve({
    credentials: {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      signinUrl: "/api/auth/signin/credentials",
      callbackUrl: "/api/auth/callback/credentials",
    },
  })
}
