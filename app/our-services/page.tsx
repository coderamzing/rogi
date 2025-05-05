import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  RefreshCw,
  ArrowLeftRight,
  PiggyBank,
  CreditCard,
  Building,
  Landmark,
  Users,
  Plane,
  Briefcase,
  Building2,
  BadgePercent,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "first-time-buyers",
    icon: <Home className="w-12 h-12 text-primary" />,
    title: "First-Time Buyers",
    shortDescription:
      "Get the lowest rates and personalized guidance for your first home purchase.",
    link: "/purchase",
  },
  {
    id: "purchase",
    icon: <Home className="w-12 h-12 text-primary" />,
    title: "Purchase Mortgages",
    shortDescription:
      "Find the best mortgage rates for your new home purchase.",
    link: "/purchase",
  },
  {
    id: "refinance",
    icon: <RefreshCw className="w-12 h-12 text-primary" />,
    title: "Refinance Mortgages",
    shortDescription:
      "Lower your payments or access your home equity with competitive rates.",
    link: "/refinance",
  },
  {
    id: "debt-consolidation",
    icon: <CreditCard className="w-12 h-12 text-primary" />,
    title: "Debt Consolidation",
    shortDescription:
      "Combine high-interest debts into one lower monthly payment.",
    link: "/refinance",
  },
  {
    id: "heloc",
    icon: <ArrowLeftRight className="w-12 h-12 text-primary" />,
    title: "Home Equity Line of Credit",
    shortDescription:
      "Access your home equity with flexible borrowing options.",
    link: "/refinance",
  },
  {
    id: "second-mortgages",
    icon: <Building className="w-12 h-12 text-primary" />,
    title: "Second Mortgages",
    shortDescription:
      "Tap into your equity without touching your first mortgage.",
    link: "/refinance",
  },
  {
    id: "reverse-mortgages",
    icon: <Landmark className="w-12 h-12 text-primary" />,
    title: "Reverse Mortgages",
    shortDescription: "Convert home equity to cash for homeowners 55+.",
    link: "/refinance",
  },
  {
    id: "renewals",
    icon: <BadgePercent className="w-12 h-12 text-primary" />,
    title: "Mortgage Renewals",
    shortDescription:
      "Renew your mortgage with potentially better terms and rates.",
    link: "/renew",
  },
  {
    id: "jumbo",
    icon: <Building2 className="w-12 h-12 text-primary" />,
    title: "Jumbo Mortgages",
    shortDescription: "Specialized financing for properties over $1 million.",
    link: "/purchase",
  },
  {
    id: "new-to-canada",
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "New to Canada",
    shortDescription:
      "Mortgage solutions for newcomers with limited credit history.",
    link: "/purchase",
  },
  {
    id: "vacation-homes",
    icon: <Plane className="w-12 h-12 text-primary" />,
    title: "Vacation & Secondary Homes",
    shortDescription: "Finance your dream vacation property or second home.",
    link: "/purchase",
  },
  {
    id: "commercial",
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: "Commercial Mortgages",
    shortDescription:
      "Specialized financing for commercial and multi-unit properties.",
    link: "/purchase",
  },
  {
    id: "rental",
    icon: <PiggyBank className="w-12 h-12 text-primary" />,
    title: "Rental Property Mortgages",
    shortDescription: "Smart financing solutions for real estate investors.",
    link: "/purchase",
  },
];

const serviceDetails = {
  "first-time-buyers": {
    title: "First-Time Buyers",
    subtitle:
      "Welcome to ROGI: Where Your First Mortgage Comes with Canada's Lowest Rates",
    description:
      "Buying your first home is one of life's biggest milestones—and it should feel exciting, not overwhelming. That's why we built ROGI: to make the mortgage process easier, smarter, and way more affordable.",
    features: [
      {
        title: "Lowest Rates in Canada",
        description:
          "Our AI does the heavy lifting—scanning rates from banks, credit unions, and mortgage lenders in real time. The result? You get access to the lowest available mortgage rate, every time.",
      },
      {
        title: "Smart, Personalized Guidance",
        description:
          "ROGI isn't just a bot—it's your AI-powered mortgage assistant. Ask it anything mortgage-related, and it will instantly direct you to the best answers and the most relevant pages on our site.",
      },
      {
        title: "Faster Everything",
        description:
          "Thanks to ROGI's built-in AI underwriting, we can speed up approvals, reduce delays, and keep your application moving—so you can focus on finding the perfect home instead of waiting on paperwork.",
      },
      {
        title: "No Sales Pitch. Just Facts.",
        description:
          "ROGI isn't trying to 'sell' you anything. It's just here to help you understand what makes the most sense—financially. When a mortgage option saves you money, we'll show you how.",
      },
    ],
    expectations: [
      "Mortgage Clarity, Not Confusion - Our easy-to-use platform explains key terms, government incentives, down payment requirements, and more—so you never feel out of your depth.",
      "Powerful Tools at Your Fingertips - From mortgage calculators to real-time rate displays and educational resources, everything you need to explore your options is built right in.",
      "Human Support, If You Want It - While ROGI handles most of the heavy lifting, sometimes you want to talk to a person. That's why our Mortgage Specialists are available to answer your questions.",
      "Always-On AI Help - Whether it's your first visit to the site or you're deep into comparing mortgage options, ROGI is always there to help.",
    ],
    cta: "Start Your Journey with ROGI",
    ctaDescription:
      "Ready to see how much you could save on your first mortgage?",
    image: "/placeholder.svg?key=ezai4",
  },
  purchase: {
    title: "Purchase Mortgages",
    subtitle: "Smarter Mortgages Start Here—Powered by ROGI",
    description:
      "Whether you're buying your very first home or upgrading to your next one, choosing the right mortgage is a big decision. At ROGI, we're here to make that decision easier—and a whole lot smarter.",
    features: [
      {
        title: "Insured Mortgage",
        description:
          "5%–19.99% Down Payment, Max Property Value: $1,500,000, 30-Year Amortization (First-Time Buyers or New Builds), Mortgage Default Insurance Premium Required",
      },
      {
        title: "Conventional Mortgage",
        description:
          "20%+ Down Payment (or Equity), No Maximum Property Value, 30-Year Amortization for Any Applicant, No Mortgage Default Insurance",
      },
    ],
    sections: [
      {
        title: "Insured Mortgages: Opening Doors for Buyers",
        content:
          "If your down payment is less than 20%, your mortgage will be insured—meaning you'll need Mortgage Default Insurance (MDI), typically from CMHC, Sagen, or Canada Guaranty. While this adds a small premium to your mortgage, it helps more Canadians qualify and secure lower interest rates.",
      },
      {
        title: "Why Insured Mortgages Work for Many",
        content:
          "Lower Down Payment: Buy a home with as little as 5% down. Best Available Rates: Lenders often offer their lowest rates on insured mortgages due to the reduced risk. Flexible Terms: Choose from a variety of repayment options. Easier to Qualify: Insurance reduces lender risk, which can make approval more accessible.",
      },
      {
        title: "Conventional Mortgages: More Flexibility, No Insurance",
        content:
          "If you've got 20% or more for a down payment, a conventional mortgage might be your best option. These don't require mortgage insurance and offer more freedom in terms of property value, underwriting, and structure.",
      },
    ],
    cta: "Let ROGI Guide You to the Right Mortgage",
    ctaDescription:
      "Choosing the right mortgage isn't about who's been around the longest—it's about who's using the best tools right now.",
    image: "/placeholder.svg?key=hn6q5",
  },
  refinance: {
    title: "Refinance Mortgages",
    subtitle:
      "Smarter Refinancing Starts Here—with the Power of AI and the Lowest Rates in Canada",
    description:
      "Whether you're looking to reduce your monthly payments, consolidate debt, fund a renovation, or tap into your home equity, refinancing your mortgage can be one of the most strategic financial moves you make.",
    features: [
      {
        title: "Rate and Term Refinance",
        description:
          "Looking to lower your interest rate or adjust the length of your mortgage term? This is a great option if you want to reduce your monthly payments, save on interest, or align your mortgage with new financial goals.",
      },
      {
        title: "Cash-Out Refinance",
        description:
          "Need funds for renovations, debt consolidation, or even investing? A cash-out refinance lets you tap into your home equity by increasing your mortgage balance.",
      },
      {
        title: "Cash-In Refinance",
        description:
          "If you have extra cash available, this option lets you pay down your mortgage balance while also securing better terms. It's a smart way to build equity faster and reduce your long-term interest costs.",
      },
    ],
    sections: [
      {
        title: "Home Equity Loan Options",
        content:
          "Not ready to refinance your entire mortgage? ROGI can also help you explore home equity loans as flexible alternatives. A HELOC gives you access to revolving credit based on your home equity. Only pay interest on what you use—great for ongoing or unpredictable expenses.",
      },
      {
        title: "NEW: CMHC Refinance Program for Secondary Units",
        content:
          "One of the latest programs from CMHC allows homeowners to refinance up to 90% of their home's value—with a specific focus on creating secondary rental or in-law units.",
      },
    ],
    cta: "ROGI Makes Refinancing Smarter and Simpler",
    ctaDescription:
      "Refinancing isn't just about swapping one loan for another—it's about using your equity to optimize your financial future.",
    image: "/placeholder.svg?key=zh2wg",
  },
  "debt-consolidation": {
    title: "Debt Consolidation",
    subtitle: "One Simple Payment. One Smarter Solution. Powered by ROGI.",
    description:
      "When debt is spread across multiple credit cards, lines of credit, or personal loans, it can start to feel like you're running in place—making payments every month but never making real progress.",
    features: [
      {
        title: "One Simple Monthly Payment",
        description:
          "Instead of juggling multiple payments, due dates, and high interest rates, consolidation brings it all together—into one predictable monthly payment that's easier to manage.",
      },
      {
        title: "Lower Interest Rates",
        description:
          "Most credit cards charge 19–25% interest. At ROGI, our mortgage and home equity rates are a fraction of that. By consolidating, you could save thousands in interest over time.",
      },
      {
        title: "Less Stress, More Control",
        description:
          "Living under a cloud of debt can take a toll on your peace of mind. With a clear, consolidated plan, you can breathe easier knowing there's a light at the end of tunnel.",
      },
      {
        title: "Faster Debt Repayment",
        description:
          "When more of your monthly payment goes toward the principal—not interest—you get out of debt sooner. That's financial freedom, faster.",
      },
    ],
    sections: [
      {
        title: "How ROGI Makes It Easy",
        content:
          "ROGI doesn't rely on old-school paperwork and manual processes. Our platform uses smart tech to make the entire process faster and easier—from the moment you ask our AI bot a question to the second you're connected with a Mortgage Specialist who can help structure your plan.",
      },
      {
        title: "Common Debt Consolidation Strategies",
        content:
          "Mortgage Refinancing: Roll your high-interest debts into a new, lower-rate mortgage and reduce your monthly payments instantly. Home Equity Loans or Lines of Credit: Access your home equity without touching your existing mortgage. Personalized, Data-Driven Advice: We don't guess—we run the math.",
      },
    ],
    quote:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
    quoteAuthor: "Albert Einstein",
    cta: "Ready to Take Control?",
    ctaDescription:
      "Ask ROGI your debt consolidation questions right now, or connect with a Mortgage Specialist to walk through your numbers.",
    image: "/placeholder.svg?key=wxtgz",
  },
  heloc: {
    title: "Home Equity Line of Credit (HELOC)",
    subtitle:
      "Unlock the Power of Your Home's Equity—Smarter, Faster, with ROGI",
    description:
      "A Home Equity Line of Credit (HELOC) is one of the most flexible financial tools available to homeowners. It gives you access to the equity you've built in your home—without touching your existing mortgage—and puts you in control of how and when you use it.",
    features: [
      {
        title: "Only Pay for What You Use",
        description:
          "You're charged interest only on the borrowed amount—not your full credit limit.",
      },
      {
        title: "Keep Your Low Mortgage Rate",
        description:
          "No need to refinance your primary mortgage. A HELOC lets you borrow without disrupting your locked-in rate.",
      },
      {
        title: "Flexible, Affordable Borrowing",
        description:
          "With rates tied to the Bank of Canada's prime rate (and often better through ROGI), HELOCs can offer lower interest costs compared to other forms of borrowing.",
      },
      {
        title: "Interest-Only Payments",
        description:
          "Many HELOCs allow for interest-only payments during the draw period, giving you cash flow flexibility when you need it most.",
      },
      {
        title: "Strategic Use of Equity",
        description:
          "Put your equity to work—whether you're building wealth, tackling major expenses, or simply giving yourself a financial cushion.",
      },
    ],
    sections: [
      {
        title: "The ROGI Advantage: Smarter Tech, Better Timing",
        content:
          "Most major banks in Canada charge Prime + 0.50% on HELOCs—it's become a standard rate in the market. But what many don't realize is that some lenders break from that pattern, offering promotional or below-market pricing for short windows of time.",
      },
      {
        title: "Why Consider a HELOC?",
        content:
          "A HELOC gives you on-demand access to funds with the freedom to borrow and repay at your own pace. It's ideal for: Home renovations or upgrades, Education expenses or tuition, Debt consolidation, Emergency reserves, Investment opportunities.",
      },
      {
        title: "How Much Can You Borrow?",
        content:
          "Most major lenders allow borrowing up to 65% of your home's market value, less the balance of your current mortgage. Alternative lenders may offer higher loan-to-value (LTV) options but often come with higher rates and additional fees.",
      },
      {
        title: "HELOC vs. Home Equity Loan: Know the Difference",
        content:
          "A HELOC offers a flexible credit line you can draw from as needed—ideal for expenses that come in phases or aren't fully known upfront. A home equity loan provides a one-time lump sum, with fixed payments that cover both interest and principal—better for large, one-time purchases where costs are predictable.",
      },
    ],
    cta: "Let ROGI Help You Access the Best HELOC Options",
    ctaDescription:
      "The best time to access your equity is when the rate is right. ROGI will make sure you don't miss it.",
    image: "/placeholder.svg?key=a3jwq",
  },
  "second-mortgages": {
    title: "Second Mortgages",
    subtitle:
      "Unlock the Equity in Your Home—Without Touching Your First Mortgage",
    description:
      "Sometimes, financial life throws you curveballs. Other times, you see an opportunity and need quick access to capital. Either way, a second mortgage could be the smart solution—especially if you want to tap into your home's equity without touching your low-rate first mortgage.",
    features: [
      {
        title: "Easy Approvals",
        description:
          "Second mortgage lenders often prioritize your home equity over credit score or income history. If you've got at least 20% equity, there's a good chance you'll qualify—even if traditional banks have said no.",
      },
      {
        title: "Debt Consolidation",
        description:
          "Pay off high-interest credit cards, personal loans, or lines of credit by consolidating into one, lower monthly payment.",
      },
      {
        title: "Lower Monthly Payments",
        description:
          "Many second mortgages offer interest-only payment options, helping to free up monthly cash flow when you need it most.",
      },
      {
        title: "Open Terms",
        description:
          "Most second mortgages are 'open,' meaning you can pay them off at any time with no penalty. That gives you control and flexibility.",
      },
      {
        title: "Funds for Any Purpose",
        description:
          "Use the money however you need—from home renovations and tuition fees to emergency expenses or short-term investment opportunities.",
      },
    ],
    sections: [
      {
        title: "Real-Life Example: ROGI in Action",
        content:
          "The Situation: In 2023, a homeowner locked in a 5-year fixed mortgage at 5.19%, with a maturity date in 2028. Their home is currently valued at $820,000, and their remaining first mortgage balance is $510,000. Over time, they accumulated $92,000 in high-interest credit card and unsecured loan debt, with average interest rates above 22%. Monthly payments on that debt alone totaled roughly $2,220, creating significant financial pressure—especially with the rising cost of living.",
      },
      {
        title: "The ROGI Solution",
        content:
          "We secured a second mortgage that allowed them to consolidate all their unsecured debt: Second Mortgage Amount: $95,000, Interest Rate: 11.99%, Monthly Payment (Interest-Only): $948, Monthly Payment Savings: $1,272. Even after the new second mortgage, the homeowner still had more than $215,000 in remaining equity.",
      },
      {
        title: "Is a Second Mortgage Right for You?",
        content:
          "Consider a second mortgage if you: Need funds but don't want to refinance your current low-rate mortgage, Are looking to consolidate debt at a lower monthly cost, Are planning a large expense (renovation, tuition, etc.), Have equity but don't meet the income or credit requirements of traditional lending.",
      },
    ],
    cta: "ROGI Makes It Simple",
    ctaDescription:
      "Our smart platform and expert Mortgage Specialists work together to help you understand your second mortgage options clearly—no guesswork, no pressure.",
    image: "/placeholder.svg?key=qv3zw",
  },
  "reverse-mortgages": {
    title: "Reverse Mortgages",
    subtitle:
      "Financial Flexibility in Retirement—Powered by AI, Backed by Smart Lending",
    description:
      "A reverse mortgage is a unique financial tool designed to help Canadian homeowners aged 55+ unlock the equity in their homes—without selling, downsizing, or giving up ownership.",
    features: [
      {
        title: "Tax-Free Access to Home Equity",
        description:
          "Use the money however you like—whether it's for renovations, travel, healthcare, or helping your children or grandchildren.",
      },
      {
        title: "No Monthly Mortgage Payments",
        description:
          "Free up your monthly budget and relieve financial pressure in retirement.",
      },
      {
        title: "Stay in Your Home",
        description:
          "Keep living in your home as long as you choose—no downsizing required.",
      },
      {
        title: "More Equity Preserved Through Lower Rates",
        description:
          "Because interest accrues over time, a lower rate helps protect your home's value—leaving more for your estate or heirs.",
      },
    ],
    sections: [
      {
        title: "Why ROGI Makes a Difference for Reverse Mortgages",
        content:
          "Here's the truth: there are only a few reverse mortgage lenders in Canada, and most people don't even realize they have options. That's why it's critical to have access to real-time information—especially when every fraction of a percent saved on interest helps preserve more of your home's equity for future use or inheritance.",
      },
      {
        title: "What Is a Reverse Mortgage?",
        content:
          "A reverse mortgage allows you to convert part of your home's equity into tax-free cash, all while keeping full ownership of your property. There are no required monthly payments—the loan (and interest) is typically repaid when you sell the home or move out permanently.",
      },
      {
        title: "Who Offers Reverse Mortgages in Canada?",
        content:
          "Only a small number of lenders currently offer reverse mortgages in Canada, including: Equitable Bank Reverse Mortgage and HomeEquity Bank (CHIP Reverse Mortgage).",
      },
    ],
    comparison: {
      title: "Reverse Mortgage Comparison at a Glance",
      headers: ["Feature", "Equitable Bank", "CHIP (HomeEquity Bank)"],
      rows: [
        ["Availability", "Urban/Suburban", "Nationwide"],
        ["Rates", "Lower, more flexible", "Slightly higher"],
        ["Borrowing Limits", "Typically higher", "Based on age + home value"],
        [
          "Disbursement",
          "Flexible draw options",
          "Lump sum, monthly, or hybrid",
        ],
      ],
    },
    cta: "Let ROGI Help You Make the Right Choice",
    ctaDescription:
      "With only a handful of reverse mortgage lenders in Canada, and no one-size-fits-all solution, it's more important than ever to make an informed decision.",
    image: "/placeholder.svg?key=lcfbp",
  },
  renewals: {
    title: "Mortgage Renewals",
    subtitle:
      "The Biggest Mortgage Moment in Canadian History Is Coming. ROGI Will Help You Navigate It.",
    description:
      "Between 2026 and 2027, more Canadians will be renewing their mortgages than ever before. Why? Because during the COVID-era rate drop, millions of homeowners locked in ultra-low 5-year fixed rates in 2021 and 2022. Now those terms are coming due—creating what many are calling a renewal tsunami.",
    features: [
      {
        title: "Real-Time Rate Scanning",
        description:
          "ROGI's tech searches dozens of lenders across Canada for the lowest rates—instantly.",
      },
      {
        title: "Personalized Mortgage Strategy",
        description:
          "Our Mortgage Specialists analyze your financial goals and pair them with the most competitive offers available.",
      },
      {
        title: "Faster, Simpler Process",
        description:
          "You tell ROGI what you're looking for—our system does the rest. We compare rates, terms, and options so you don't have to.",
      },
      {
        title: "Maximize Your Savings, Minimize Your Time",
        description:
          "Most people leave money on the table during renewals. With ROGI, you won't be one of them.",
      },
      {
        title: "No Cost to You",
        description:
          "Lenders pay us. You get expert advice and lower rates—without spending a dime.",
      },
    ],
    sections: [
      {
        title:
          "Don't Accept Your Bank's First Offer—It Could Cost You Thousands",
        content:
          "Did you know that nearly 2 out of 3 Canadians simply accept their lender's renewal offer without shopping around? That decision alone can cost you $500 to $2,500 per year in unnecessary interest—sometimes more.",
      },
      {
        title: "Why Renewing Your Mortgage Is a Big Deal",
        content:
          "A mortgage renewal is more than just a date on the calendar—it's a moment to reassess, renegotiate, and realign your mortgage with your financial goals.",
      },
      {
        title: "No Stress Test for Straight Switches: A Hidden Advantage",
        content:
          "Current Canadian mortgage rules allow you to switch lenders at renewal without requalifying under the stress test, as long as your mortgage amount, amortization, and structure stay the same.",
      },
      {
        title: "Why 2026 and 2027 Matter More Than Ever",
        content:
          "These next two years will see the largest wave of mortgage renewals in Canadian history. Millions of homeowners will be moving from rates as low as 1.5% to rates double or even triple that.",
      },
    ],
    cta: "Ready to Renew Smarter?",
    ctaDescription:
      "You only renew every few years—make this one count. Let ROGI help you get it right.",
    image: "/placeholder.svg?key=zrhzs",
  },
  jumbo: {
    title: "Jumbo Mortgages",
    subtitle:
      "Financing Over $1 Million? Let ROGI Find the Smartest Way to Fund Your Dream Home",
    description:
      "With property values rising across Canada—especially in cities like Toronto, Vancouver, Calgary, and Montreal—more and more homeowners are needing mortgages above $1 million. These are known as jumbo mortgages, and while they aren't a different product type per se, they do come with special underwriting rules and lender-specific quirks.",
    features: [
      {
        title: "Real-Time Sliding Scale Bypass Detection",
        description:
          "Our system instantly identifies which lenders are willing to waive or soften their sliding scale requirements for your specific purchase scenario.",
      },
      {
        title: "Live Rate Scanning Across the Market",
        description:
          "Banks and monoline lenders often run special rate offers for jumbo mortgages—but they don't last long. ROGI's AI keeps tabs on who's offering what so you never miss out.",
      },
      {
        title: "Tailored Mortgage Strategies",
        description:
          "Jumbo mortgages aren't just about income—they're about net worth, liquid assets, and deal structure. ROGI helps match you with lenders who take a more holistic view of your finances.",
      },
      {
        title: "No Guesswork, No Surprises",
        description:
          "You won't get blindsided by unexpected down payment requirements or rate jumps. ROGI lays it all out clearly, upfront.",
      },
    ],
    sections: [
      {
        title: "What Makes Jumbo Mortgages So Unique?",
        content:
          "When your mortgage amount exceeds $1 million, most Canadian lenders apply a sliding scale. That means they'll lend 80% of the first $1 million—but only 50%–60% of the amount above that. You're left covering a much larger down payment than expected.",
      },
      {
        title: "Who Benefits from Jumbo Mortgages?",
        content:
          "Luxury Homebuyers purchasing high-end or custom-built homes, Multi-generational Families buying larger, shared living spaces, Investors acquiring high-value properties in prime markets, Business Owners & Self-Employed Borrowers with complex income structures.",
      },
      {
        title: "Why Timing Matters",
        content:
          "Unlike standard mortgages, jumbo mortgage pricing is often seasonal. Lenders adjust their appetite for high-value deals based on internal goals, quarterly targets, and market volume. That means the lowest rates aren't always available—they show up in windows.",
      },
    ],
    cta: "Ready to Finance Your Dream Home?",
    ctaDescription:
      "With ROGI, you won't settle for the first offer—or the biggest down payment. You'll get the smartest strategy and the best deal.",
    image: "/placeholder.svg?key=xp49u",
  },
  "new-to-canada": {
    title: "New to Canada Mortgages",
    subtitle:
      "Helping Newcomers to Canada Become Homeowners—Fast, Smart, and with as Little as 5% Down",
    description:
      "Canada welcomes over 400,000 new immigrants each year, and with it comes the dream of homeownership. For many new Canadians, buying a home isn't just about shelter—it's about security, stability, and starting fresh in a country full of opportunity.",
    features: [
      {
        title: "Down Payment",
        description:
          "5% down for homes up to $500,000; 10% on the portion above",
      },
      {
        title: "Credit History",
        description:
          "International credit or alternative sources (rental, utilities, etc.) accepted",
      },
      {
        title: "Residency Requirements",
        description: "Permanent residents and work permit holders are eligible",
      },
      {
        title: "Property Eligibility",
        description: "Must be owner-occupied (house, condo, townhome, etc.)",
      },
      {
        title: "Loan-to-Value",
        description: "Up to 95% financing available",
      },
      {
        title: "Rate Holds",
        description: "Secure a rate for up to 120 days while you shop",
      },
    ],
    sections: [
      {
        title: "What Is a New to Canada Mortgage?",
        content:
          "A 'New to Canada' mortgage is designed specifically for recent immigrants or permanent residents who may not yet meet traditional lending criteria. These programs—offered by major banks and insured by Canada's default mortgage insurers—give newcomers better access to homeownership with as little as 5% down.",
      },
      {
        title: "Major Banks with 'New to Canada' Mortgage Programs",
        content:
          "ROGI's platform connects you to lenders across Canada, including the big banks offering programs tailored to newcomers: Scotiabank – StartRight® Program, National Bank – Newcomers Program, BMO – NewStart® Program, TD Bank – New to Canada Program.",
      },
      {
        title: "How to Get a Mortgage as a Newcomer to Canada",
        content:
          "ROGI helps make the process easier by combining smart tech with real support. Here's what you'll need: 1. Build Basic Canadian Credit, 2. Save Your Down Payment, 3. Gather Your Paperwork, 4. Let ROGI Handle the Rest.",
      },
      {
        title: "Why Homeownership Matters for New Canadians",
        content:
          "Owning a home isn't just about investing in real estate—it's about planting roots, creating stability, and building a future for your family. With the right mortgage program, it's possible to own a home in Canada sooner than you think, even if you've only recently arrived.",
      },
    ],
    quote: "The ache for home lives in all of us.",
    quoteAuthor: "Maya Angelou",
    cta: "Ready to Start Your Canadian Homeownership Journey?",
    ctaDescription:
      "We believe every new Canadian should have access to smart, simple, and affordable mortgage solutions. ROGI is here to help you get home.",
    image: "/placeholder.svg?key=xp3ln",
  },
  "vacation-homes": {
    title: "Vacation & Secondary Home Mortgages",
    subtitle:
      "Whether It's a Lakeside Escape or a Second Home for Family—ROGI Makes It Easy",
    description:
      "Owning a vacation home or secondary property is a dream for many Canadians—and for some, it's also a practical way to support loved ones. Whether you're buying a cottage, a chalet, or a second home for a child or parent, financing these types of homes comes with its own set of rules.",
    features: [
      {
        title: "Down Payment",
        description:
          "5% down for homes up to $500,000; 10% down on the portion above $500,000",
      },
      {
        title: "Owner Occupied",
        description: "Must be owner-occupied or occupied by a family member",
      },
      {
        title: "Property Types",
        description:
          "Available for single-family homes, condos, and 4-season cottages",
      },
      {
        title: "Loan-to-Value",
        description:
          "Up to 95% loan-to-value for permanent residents with good credit",
      },
      {
        title: "Rate Holds",
        description: "Rate holds up to 120 days",
      },
    ],
    sections: [
      {
        title: "What Is a Secondary Home?",
        content:
          "A secondary home is any property you own that's not your primary residence, but is still intended for personal or family use. This includes: Vacation homes like cottages, chalets, or mountain retreats, Family-use homes, such as a house for a university student or aging parent.",
      },
      {
        title: "CMHC's Secondary Home Program: The Basics",
        content:
          "For qualified buyers, CMHC-insured mortgages make it possible to buy a secondary home with as little as 5% down.",
      },
      {
        title: "Vacation Homes: What Lenders Look For",
        content:
          "Financing a vacation property depends heavily on location, access, and seasonal use: 1. Accessibility, 2. Property Type, 3. Market Location.",
      },
      {
        title: "Secondary Homes for Family Members",
        content:
          "A secondary home doesn't have to be for vacations—it can be a meaningful way to support family: University Students, Elderly Parents, Future Flexibility.",
      },
    ],
    comparison: {
      title: "Insured vs. Conventional Mortgages for Vacation Homes",
      headers: ["Feature", "Insured", "Conventional"],
      rows: [
        ["Down Payment", "5–10%", "Minimum 20%"],
        ["Interest Rates", "Lower (insured)", "Slightly higher"],
        [
          "Property Type",
          "Must be accessible, livable year-round",
          "More flexibility (3-season, island access)",
        ],
        [
          "Amortization",
          "Max 25 years (unless a first-time buyer or new build)",
          "Up to 30 years",
        ],
        [
          "Usage Rules",
          "Must be family-occupied",
          "Rental use may be allowed (case by case)",
        ],
      ],
    },
    cta: "Ready to Start the Journey to Your Second Home?",
    ctaDescription:
      "Whether it's a quiet escape in the woods or a downtown condo for your university student, ROGI will help you get there—smarter, faster, and for less.",
    image: "/placeholder.svg?key=5mipp",
  },
  commercial: {
    title: "Commercial Mortgages",
    subtitle:
      "When It's Not About the Lowest Rate—ROGI Knows When to Pass the Torch",
    description:
      "At ROGI, we're laser-focused on what we do best: helping Canadians get the lowest interest rates on residential mortgages—fast, intelligently, and with the help of AI-powered tools. But not every mortgage is about rates. Some mortgage files—like commercial mortgages—are complex, layered, and require a highly specialized approach.",
    features: [
      {
        title: "Multi-family buildings with 5+ units",
        description:
          "Financing for apartment buildings and multi-unit residential properties",
      },
      {
        title: "Office buildings",
        description:
          "Mortgages for commercial office spaces and professional buildings",
      },
      {
        title: "Retail and mixed-use spaces",
        description:
          "Financing for retail storefronts and mixed commercial/residential properties",
      },
      {
        title: "Industrial or warehouse properties",
        description:
          "Mortgages for manufacturing, storage, and industrial facilities",
      },
    ],
    sections: [
      {
        title: "ROGI + Better Mortgage Select: A Smarter Partnership",
        content:
          "ROGI is proud to be part of the Better Mortgage Group of Companies, and through that connection, we're able to make fast, seamless referrals to our sister company, Better Mortgage Select—a team that specializes in commercial mortgages and known as the #1 source for mortgages in the Real Estate Investor space.",
      },
      {
        title: "What Is a Commercial Mortgage?",
        content:
          "A commercial mortgage is a loan secured by income-producing or non-residential property, such as: Multi-family buildings with 5+ units, Office buildings, Retail and mixed-use spaces, Industrial or warehouse properties.",
      },
      {
        title: "CMHC's MLI Select Program (Yes, It's Worth Knowing About)",
        content:
          "One of the most innovative financing options in the commercial space is the MLI Select Program from CMHC. It's designed to promote the development and preservation of affordable multi-unit housing through incentives and preferential mortgage terms.",
      },
      {
        title: "Why ROGI Refers These Files",
        content:
          "We're all about transparency and doing what's best for the client. Commercial mortgage files are too important—and too intricate—to be handled by anyone less than an expert in that field.",
      },
    ],
    cta: "Next Steps: ROGI Will Connect You Directly",
    ctaDescription:
      "If you're here exploring commercial mortgage options, we've got you covered. Once you submit your details, ROGI's system will instantly recognize the file type and route it to a commercial mortgage specialist at Better Mortgage Select.",
    image: "/placeholder.svg?key=727ey",
  },
  rental: {
    title: "Rental Property Mortgages",
    subtitle: "The Smart Investor's Mortgage? It's Not Always About the Rate.",
    description:
      "At ROGI, we're built to deliver Canada's lowest mortgage rates using advanced AI technology. But we're also smart enough to know when a mortgage needs more than just low rates. When it comes to financing rental properties and real estate investments, the truth is—it's not all about automation.",
    features: [
      {
        title: "Total property portfolio",
        description:
          "Lenders evaluate your entire real estate holdings, not just the property being financed",
      },
      {
        title: "Rental income projections",
        description:
          "Lenders assess the potential rental income and how it affects your debt servicing",
      },
      {
        title: "Property-specific cash flow",
        description:
          "Each property's financial performance is analyzed individually",
      },
      {
        title: "Complex income scenarios",
        description:
          "Holding companies, multiple titles, joint ventures, and other complex structures require specialized handling",
      },
    ],
    sections: [
      {
        title: "Part of the Better Mortgage Group",
        content:
          "ROGI is proud to be part of the Better Mortgage Group of Companies, which includes Better Mortgage Select, one of Canada's top teams when it comes to mortgages for real estate investors.",
      },
      {
        title: "Why Real Estate Investing Is Still King",
        content:
          "Real estate remains one of Canada's most powerful wealth-building tools. Here's why so many Canadians are turning to rental properties: 15% of homeowners now own more than one property—and that number is rising, Real estate offers strong long-term returns, especially when leveraging mortgages, Rental income creates monthly cash flow while the asset grows in value.",
      },
      {
        title: "What Makes Rental Mortgages So Different?",
        content:
          "Investor mortgages come with unique challenges and opportunities. Unlike a standard residential mortgage, lenders look at: Your total property portfolio, Rental income projections, Property-specific cash flow and debt servicing, Complex income scenarios.",
      },
      {
        title: "That's Why ROGI Refers These Files",
        content:
          "ROGI is built for speed, simplicity, and low-rate access—but investment mortgages require a different kind of expertise. We don't want to just 'get the deal done'—we want to make sure you're working with a team that can structure your mortgage in a way that helps you scale your portfolio, maximize your borrowing power, and build long-term wealth.",
      },
    ],
    cta: "What Happens Next?",
    ctaDescription:
      "If you're looking to purchase or refinance a rental property, here's what happens when you reach out: Ask ROGI your question about investment properties, Our system flags the file and instantly passes it to a specialist at Better Mortgage Select, You're contacted by someone who speaks your language and understands your goals.",
    image: "/placeholder.svg?key=2s13u",
  },
};

export default function OurServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-gilroy-black text-primary mb-6">
                Our Mortgage Services
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Expert guidance and competitive rates for all your mortgage
                needs. Whether you're buying, renewing, or refinancing, we're
                here to help you make informed decisions with AI-powered
                insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="/apply">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&query=mortgage services digital banking technology"
                alt="Mortgage services illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="first-time-buyers" className="w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-gilroy-black mb-6 text-center">
                Explore Our Mortgage Services
              </h2>
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 text-sm"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(serviceDetails).map(([id, details]) => (
              <TabsContent key={id} value={id} className="mt-0">
                <div id={id} className="scroll-mt-20">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b">
                      <CardTitle className="text-3xl font-gilroy-black text-primary">
                        {details.title}
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-gray-700">
                        {details.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6 md:p-8">
                          <p className="text-gray-700 mb-6">
                            {details.description}
                          </p>

                          {details.features && (
                            <div className="mb-8">
                              <h3 className="text-xl font-gilroy-black mb-4">
                                Key Benefits
                              </h3>
                              <div className="grid gap-4">
                                {details.features.map((feature, index) => (
                                  <div key={index} className="flex gap-3">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                      ✓
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-gray-800">
                                        {feature.title}
                                      </h4>
                                      <p className="text-sm text-gray-600">
                                        {feature.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {"expectations" in details &&
                            Array.isArray(details.expectations) && (
                              <div className="mb-8">
                                <h3 className="text-xl font-gilroy-black mb-4">
                                  What You Can Expect
                                </h3>
                                <ul className="space-y-2">
                                  {details.expectations.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="text-primary mt-1">
                                        •
                                      </span>
                                      <span className="text-gray-700">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          {"quote" in details && details.quote && (
                            <div className="my-8 border-l-4 border-primary pl-4 italic text-gray-700">
                              <p className="mb-2">"{details.quote}"</p>
                              {"quoteAuthor" in details &&
                                details.quoteAuthor && (
                                  <p className="text-sm text-gray-500">
                                    — {details.quoteAuthor}
                                  </p>
                                )}
                            </div>
                          )}

                          <div className="mt-8">
                            <h3 className="text-xl font-gilroy-black mb-4">
                              {details.cta}
                            </h3>
                            <p className="text-gray-700 mb-4">
                              {details.ctaDescription}
                            </p>
                            <div className="flex flex-wrap gap-4">
                              <Button
                                asChild
                                className="bg-primary hover:bg-primary/90"
                              >
                                <Link href="/apply">Get Started</Link>
                              </Button>
                              <Button asChild variant="outline">
                                <Link href="/contact">
                                  Talk to a Specialist
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 p-6 md:p-8">
                          <div className="sticky top-24">
                            <div className="mb-8 overflow-hidden rounded-lg">
                              <Image
                                src={
                                  details.image ||
                                  `/placeholder.svg?height=300&width=500&query=${details.title} mortgage service illustration`
                                }
                                alt={details.title}
                                width={500}
                                height={300}
                                className="w-full object-cover rounded-lg"
                              />
                            </div>

                            {"sections" in details && details.sections && (
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                {details.sections.map((section, index) => (
                                  <AccordionItem
                                    key={index}
                                    value={`section-${index}`}
                                  >
                                    <AccordionTrigger className="text-left font-gilroy-black text-gray-800">
                                      {section.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-700">
                                      {section.content}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            )}

                            {"comparison" in details && details.comparison && (
                              <div className="mt-8">
                                <h3 className="text-xl font-gilroy-black mb-4">
                                  {details.comparison.title}
                                </h3>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr>
                                        {details.comparison.headers.map(
                                          (header, index) => (
                                            <th
                                              key={index}
                                              className="border border-gray-300 bg-gray-100 p-2 text-left text-sm font-bold"
                                            >
                                              {header}
                                            </th>
                                          )
                                        )}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {details.comparison.rows.map(
                                        (row, rowIndex) => (
                                          <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                              <td
                                                key={cellIndex}
                                                className="border border-gray-300 p-2 text-sm"
                                              >
                                                {cell}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-gilroy-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let ROGI help you find the perfect mortgage solution with AI-powered
            insights and the lowest rates in Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/calculators">Try Our Calculators</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
