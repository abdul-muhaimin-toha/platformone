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
  async redirects() {
    return [
      {
        source: '/page/privacy-policy',
        destination: '/policies/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/policies/privacy-policy',
        permanent: true,
      },
      {
        source: '/uploads/platform-one-terms-and-conditions',
        destination: '/policies/platform-one-terms-and-conditions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
