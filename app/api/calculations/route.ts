import { NextResponse } from "next/server"
import { verifyToken, getSavedCalculations } from "@/lib/db"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value

    // const token = await cookies.get("auth_token")?.value

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const decoded = await verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
    }

    const calculations = await getSavedCalculations(decoded.userId)

    return NextResponse.json({
      success: true,
      calculations,
    })
  } catch (error) {
    console.error("Error fetching calculations:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch calculations", error: String(error) },
      { status: 500 },
    )
  }
}
