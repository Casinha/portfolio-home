/** @type {import('next').NextConfig} */
const nextConfig = {}

if(process.env.GITHUB_ACTIONS || false) {
    nextConfig.output = "export"
}

module.exports = nextConfig
