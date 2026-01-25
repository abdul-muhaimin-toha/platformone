import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Serve all images at 100% original quality
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.hellonotionhive.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eqtbd.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;