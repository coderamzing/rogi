import { type NextRequest, NextResponse } from "next/server"

// Mock user data
const mockUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

// Handle all NextAuth API requests
export async function GET(request: NextRequest) {
  // Parse the URL to determine which NextAuth endpoint is being requested
  const url = new URL(request.url)
  const path = url.pathname.split("/").pop()

  // Return appropriate responses based on the endpoint
  switch (path) {
    case "session":
      return NextResponse.json({
        user: mockUser,
        expires: "2099-12-31T23:59:59.999Z",
      })

    case "providers":
      return NextResponse.json({
        google: {
          id: "google",
          name: "Google",
          type: "oauth",
        },
      })

    case "csrf":
      return NextResponse.json({
        csrfToken: "mock-csrf-token",
      })

    default:
      return NextResponse.json({
        ok: true,
      })
  }
}

// Handle POST requests (signin, signout, etc.)
export async function POST() {
  return NextResponse.json({
    ok: true,
    url: "/dashboard",
  })
}
