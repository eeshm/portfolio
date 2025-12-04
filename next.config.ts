import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      { protocol: 'https', hostname: 'images.ctfassets.net', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'github.com', pathname: '/**' },
    ]
  },
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors:true,
  }
};

export default nextConfig;
