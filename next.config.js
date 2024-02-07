/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "haveglam.com", // if your website has no www, drop it
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "www.haveglam.com", // if your website has no www, drop it
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**"
      },
    ],
  }
}

module.exports = nextConfig
