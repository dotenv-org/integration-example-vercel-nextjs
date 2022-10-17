/** @type {import('next').NextConfig} */
const result = require('dotenv-vault-core').config()
console.log(result)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: result.parsed
}

module.exports = nextConfig
