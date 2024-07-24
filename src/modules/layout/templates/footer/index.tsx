import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="border-t border-ui-border-base w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-3xl text-white hover:text-yellow-200 uppercase transition-transform transform hover:scale-110"
            >
              The Trendzz
            </LocalizedClientLink>
          </div>
          <div className="text-base gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-xl">Categories</span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return;
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;

                    return (
                      <li
                        className="flex flex-col gap-2 text-lg"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-yellow-200 transition-transform transform hover:scale-110",
                            children && "text-xl"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-yellow-200 transition-transform transform hover:scale-110"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-2xl font-bold text-black">Categories</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-lg",
                    {
                      "grid-cols-2": collections.length > 3,
                    }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-yellow-200 transition-transform transform hover:scale-110"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
            <span className="text-2xl font-bold text-black">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-lg">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-200 transition-transform transform hover:scale-110"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-200 transition-transform transform hover:scale-110"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-200 transition-transform transform hover:scale-110"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between">
          <Text className="text-lg">
            © {new Date().getFullYear()} The Trendzz. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
