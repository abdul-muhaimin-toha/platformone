import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.hellonotionhive.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
