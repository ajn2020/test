/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug/:path*',
        destination: 'https://f6omof7w1e.execute-api.eu-west-1.amazonaws.com/prod/:slug/:path*',
      },
    ]
  },
};

module.exports = nextConfig;

