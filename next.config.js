/** @type {import('next').NextConfig} */

const basePath = process.env['BASE_PATH'] || ''
console.log('Using base path of: ', basePath)

const nextConfig = {
  reactStrictMode: true,
  basePath
}

module.exports = nextConfig
