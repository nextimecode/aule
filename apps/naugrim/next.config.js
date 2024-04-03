/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['github.com', 'media.graphassets.com']
  }
}

module.exports = nextConfig
