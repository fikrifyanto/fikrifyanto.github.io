/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.ENVIRONMENT == "local" ? "" : process.env.URL,
  assetPrefix: process.env.ENVIRONMENT == "local" ? "" : process.env.URL,
  output: process.env.ENVIRONMENT == "local" ? "standalone" : "export",
  distDir: "dist",
}

module.exports = nextConfig
