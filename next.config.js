/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disables next/image optimization
      },
    trailingSlash: true, // Ensures proper routing
  };
  
  module.exports = nextConfig;
  