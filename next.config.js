const { withStoreConfig } = require("./store-config");
const store = require("./store.config.json");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MEDUSA_BACKEND_URL: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_DEFAULT_REGION: process.env.NEXT_PUBLIC_DEFAULT_REGION,
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    NEXT_PUBLIC_SEARCH_APP_ID: process.env.NEXT_PUBLIC_SEARCH_APP_ID,
    NEXT_PUBLIC_SEARCH_ENDPOINT: process.env.NEXT_PUBLIC_SEARCH_ENDPOINT,
    NEXT_PUBLIC_SEARCH_API_KEY: process.env.NEXT_PUBLIC_SEARCH_API_KEY,
    NEXT_PUBLIC_INDEX_NAME: process.env.NEXT_PUBLIC_INDEX_NAME,
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    NEXT_PUBLIC_RAZORPAY_KEY: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    NEXT_PUBLIC_SHOP_NAME: process.env.NEXT_PUBLIC_SHOP_NAME,
    NEXT_PUBLIC_SHOP_DESCRIPTION: process.env.NEXT_PUBLIC_SHOP_DESCRIPTION,
  },
});

console.log("next.config.js", JSON.stringify(nextConfig, null, 2));

module.exports = nextConfig;
