import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen relative">
      <header className="h-16 bg-white shadow-md border-b border-gray-200 bg-gradient-to-r from-pink-300 to-purple-500 relative">
        <nav className="flex h-full items-center justify-between content-container px-4 lg:px-8 ">
          <LocalizedClientLink
            href="/cart"
            className="text-sm font-semibold text-gray-700 flex items-center gap-x-2 uppercase flex-1"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-gray-600" size={16} />
            <span className="hidden lg:block">Back to shopping cart</span>
            <span className="lg:hidden">Back</span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-900"
            data-testid="store-link"
          >
            The Trendzz
          </LocalizedClientLink>
          <div className="flex-1" />
        </nav>
      </header>
      <main className="relative p-4 lg:p-8" data-testid="checkout-container">
        {children}
      </main>
      <footer className="py-4 w-full flex items-center justify-center bg-white shadow-md">
        <MedusaCTA />
      </footer>
    </div>
  )
}
