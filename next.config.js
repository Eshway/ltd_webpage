/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    excludePages: ['/admin/**'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
