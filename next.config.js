/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Keep "@" aligned with tsconfig paths ("@/*" -> "./src/*")
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
