import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip TypeScript errors during development
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable experimental features for performance
  experimental: {
    // Enable server components caching for better performance
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  
  // Configure Turbopack (Next.js 16+ default)
  turbopack: {},
  
  // Enable minification for better performance (SWC is default in Next.js 13+)
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configure images optimization
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 1 day
  },

  // Enable compression
  compress: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,

  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Enable bundle splitting for better caching
    if (!isServer && !dev) {
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };
    }

    return config;
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache API responses
      {
        source: '/api/(plants|health|optimization)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
