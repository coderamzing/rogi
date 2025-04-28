// Mock database with demo data only

// Mock user data
export const demoUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
}

// Mock applications data
export const mockApplications = {
  app1: {
    id: "app1",
    status: "pending",
    createdAt: new Date().toISOString(),
    propertyValue: 500000,
    downPayment: 100000,
    mortgageAmount: 400000,
    interestRate: 4.5,
    amortizationPeriod: 25,
    paymentFrequency: "Monthly",
    monthlyPayment: 2215.32,
    propertyAddress: "123 Main St, Toronto, ON",
    propertyType: "Single Family Home",
    notes: "First-time homebuyer",
  },
  app2: {
    id: "app2",
    status: "approved",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    propertyValue: 750000,
    downPayment: 150000,
    mortgageAmount: 600000,
    interestRate: 4.2,
    amortizationPeriod: 30,
    paymentFrequency: "Bi-weekly",
    monthlyPayment: 2932.45,
    propertyAddress: "456 Oak Ave, Vancouver, BC",
    propertyType: "Condominium",
    notes: "Refinancing existing mortgage",
  },
}

// Mock calculations data
export const mockCalculations = [
  {
    id: "calc-1",
    type: "Mortgage",
    propertyValue: 500000,
    downPayment: 100000,
    interestRate: 4.5,
    amortization: 25,
    payment: 2111.1,
    date: "2023-04-20",
    mortgageAmount: 400000,
  },
  {
    id: "calc-2",
    type: "Refinance",
    propertyValue: 650000,
    currentMortgage: 350000,
    newMortgageAmount: 400000,
    interestRate: 3.75,
    payment: 2370.52,
    date: "2023-04-15",
    amortization: 20,
  },
]

// Mock notifications
export const mockNotifications = [
  {
    id: "notif1",
    type: "application",
    message: "Your mortgage application has been approved!",
    date: "2023-04-14",
    read: false,
  },
  {
    id: "notif2",
    type: "rate",
    message: "Mortgage rates have decreased. Consider refinancing.",
    date: "2023-04-10",
    read: true,
  },
  {
    id: "notif3",
    type: "document",
    message: "Please upload your proof of income document.",
    date: "2023-04-05",
    read: false,
  },
]

// Helper functions that return mock data
export function getApplications() {
  return mockApplications
}

export function getCalculations() {
  return mockCalculations
}

export function getNotifications() {
  return mockNotifications
}

export function getApplicationById(id: string) {
  return mockApplications[id as keyof typeof mockApplications] || null
}

export async function verifyToken(token: string) {
  // Mock token verification
  if (token === "valid-token") {
    return { userId: "demo-user" }
  }
  return null
}

export async function getSavedCalculations(userId: string) {
  // Mock saved calculations retrieval
  return mockCalculations
}

export async function createChatSession(sessionId: string, userId: string | undefined) {
  // Mock chat session creation
  console.log("Chat session created:", { sessionId, userId })
  return { success: true }
}

export async function saveChatMessage(message: any) {
  // Mock saving chat message
  console.log("Chat message saved:", message)
  return { success: true }
}

export async function initDatabase() {
  return { success: true, message: "Database initialized successfully" }
}

export async function saveCalculation(calculation: any) {
  console.log("Calculation saved:", calculation)
  return "mock-calculation-id"
}

export async function getChatMessages(sessionId: string) {
  return []
}

export const sql = (strings: TemplateStringsArray, ...values: any[]): Promise<any> => {
  console.log("SQL Query:", strings.join("?"), values)
  return Promise.resolve([])
}
