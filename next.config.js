/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Referrer-Policy',
    value: 'unsafe-url'
  }
]


const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:slug/:path*',
        headers: securityHeaders,
      },
    ]
  },
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

