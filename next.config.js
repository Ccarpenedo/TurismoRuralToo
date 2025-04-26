/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Desabilitar algumas otimizações que podem causar problemas
  swcMinify: false,
  reactStrictMode: false
};

module.exports = nextConfig;
