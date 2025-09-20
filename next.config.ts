// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Improve chunking
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    };
    
    return config;
  },
  // Disable ESLint during build if needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript during build if needed
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig