const { i18n } = require('./next-i18n.config')
const { env } = require('./next-env.config')
const { pwa } = require('./next-pwa.config')
const withPWA = require('next-pwa')({
  ...pwa
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  i18n,
  env,
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
