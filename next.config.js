/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Isso substitui o comando `next export`
  images: {
    unoptimized: true, // Desativa a otimização de imagens para exportação estática
  },
}

module.exports = nextConfig
