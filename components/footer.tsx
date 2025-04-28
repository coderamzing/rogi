import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rogi Mortgage. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
