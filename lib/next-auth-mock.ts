// Stub implementation that doesn't require any providers
export const getServerSession = async () => {
  return {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    expires: "2099-01-01T00:00:00.000Z",
  }
}

export const getSession = async () => {
  return {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    expires: "2099-01-01T00:00:00.000Z",
  }
}

export const useSession = () => {
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
