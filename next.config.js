/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.ENVIRONMENT == "local" ? "" : process.env.ENVIRONMENT,
  assetPrefix: process.env.ENVIRONMENT == "local" ? "" : process.env.ENVIRONMENT,
  output: process.env.ENVIRONMENT == "local" ? "standalone" : process.env.ENVIRONMENT,
  distDir: "dist",
}

module.exports = nextConfig
