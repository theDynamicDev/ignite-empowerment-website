/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/public/:path*',
            destination: '/:path*',
          },
        ];
      },
}

module.exports = nextConfig
