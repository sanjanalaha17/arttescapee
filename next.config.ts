import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'passionate-animal-cebee928de.media.strapiapp.com',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
