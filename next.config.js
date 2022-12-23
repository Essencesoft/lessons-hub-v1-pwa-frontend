const { i18n } = require('./next-i18n.config')
const { env } = require('./next-env.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  env,
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
