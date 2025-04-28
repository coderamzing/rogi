"use client"

import {
  SessionProvider as NextAuthSessionProvider,
  useSession as useNextAuthSession,
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  getSession as nextAuthGetSession,
} from "next-auth/react"

export {
  NextAuthSessionProvider as SessionProvider,
  useNextAuthSession as useSession,
  nextAuthSignIn as signIn,
  nextAuthSignOut as signOut,
  nextAuthGetSession as getSession,
}

// Global mock for next-auth/react
// This file will be used to satisfy any imports of next-auth/react

// export function useSession() {
//   return {
//     data: {
//       user: {
//         id: "demo-user",
//         name: "Demo User",
//         email: "demo@example.com",
//       },
//     },
//     status: "authenticated",
//   }
// }

// export function signIn() {
//   return Promise.resolve()
// }

// export function signOut() {
//   return Promise.resolve()
// }

// export function getSession() {
//   return Promise.resolve({
//     user: {
//       id: "demo-user",
//       name: "Demo User",
//       email: "demo@example.com",
//     },
//   })
// }
