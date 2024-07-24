import { Suspense } from "react";
import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-gradient-to-r from-violet-600 via-black to-blue-600 border-ui-border-base text-white">
      <header className="relative h-20 mx-auto border-b border-ui-border-base duration-200 bg-transparent">
        <nav className="content-container text-xl flex items-center justify-between w-full h-full">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-3xl hover:text-yellow-200 uppercase font-bold"
              data-testid="nav-store-link"
            >
              The Trendzz
            </LocalizedClientLink>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-yellow-200 hover:text-2xl"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-yellow-200 hover:text-2xl"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-yellow-200 hover:text-2xl flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  );
}
