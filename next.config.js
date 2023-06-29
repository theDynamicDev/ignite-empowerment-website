/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/public/:path*",
        destination: "/:path*",
      },
    ];
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
