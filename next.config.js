/** @type {import('next').NextConfig} */
const nextConfig = {}

if(process.env.GITHUB_ACTIONS || false) {
    nextConfig.output = "export"
    nextConfig.basePath = "/portfolio-home"
    nextConfig.assetPrefix = "/portfolio-home/"
}

module.exports = nextConfig
