// next.config.js
import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.course-api.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
 