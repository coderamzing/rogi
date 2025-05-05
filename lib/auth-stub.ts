"use client"

import type React from "react"

// Global stub implementations for authentication functions
// This file provides mock implementations that don't require any providers

// Mock user data
export const mockUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

// Mock session data for development/demo purposes
export const mockSession = {
  data: {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
    },
    expires: "2099-12-31T23:59:59.999Z",
  },
  status: "authenticated" as const,
  update: () => Promise.resolve(null),
}

// Auth hooks replacements
export function useSession() {
  return mockSession
}

export function useAuth() {
  return {
    user: mockUser,
    isAuthenticated: true,
    login: () => Promise.resolve(true),
    logout: () => Promise.resolve(true),
  }
}

// Mock authentication functions
export const mockSignIn = () => Promise.resolve({ ok: true, error: null })
export const mockSignOut = () => Promise.resolve(true)
export const mockGetSession = () => Promise.resolve(mockSession.data)

// NextAuth function replacements
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

// Mock Session Provider component that simply renders children
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return {children}
}

// Mock Auth Provider component that simply renders children
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return {children}
}
