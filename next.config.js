/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      'www.m360.cl',
      'www.elvacanudo.cl',
      'media-front.elmostrador.cl'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.m360.cl',
        port: '',
        pathname: '/noticias/site/artic/**'
      },
      {
        protocol: 'https',
        hostname: 'www.elvacanudo.cl',
        port: '',
        pathname: '/sites/elvacanudo.cl/files/**'
      },
      {
        protocol: 'https',
        hostname: 'media-front.elmostrador.cl',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
