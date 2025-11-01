import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental features for performance
  experimental: {
    // Enable Server Components caching
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // Enable partial prerendering for better performance
    ppr: true,
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle analyzer for optimization insights
  webpack: (config, { isServer, dev }) => {
    // Enable bundle splitting for better caching
    if (!isServer && !dev) {
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

    // Optimize for production
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },

  // Image optimization
  images: {
    domains: ['localhost', 'qcmetric.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 1 day
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression and performance
  compress: true,
  
  // Headers for caching and security
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

  // Rewrites for clean URLs and API optimization
  async rewrites() {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
      {
        source: '/optimize',
        destination: '/api/optimization',
      },
    ];
  },

  // Enable static generation for better performance
  output: 'standalone',
  
  // Environment variables optimization
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },

  // PoweredBy header removal for security
  poweredByHeader: false,

  // Optimize build output
  swcMinify: true,
  
  // Enable Edge Runtime for better performance
  experimental: {
    ...nextConfig.experimental,
    serverComponentsExternalPackages: ['prisma', 'bcrypt'],
  },
};

export default nextConfig;