/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config) => {
    // Keep "@" aligned with tsconfig paths ("@/*" -> "./src/*")
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
