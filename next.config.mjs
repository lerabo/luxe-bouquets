import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [768, 1024, 3840],
    imageSizes: [32, 128, 384],
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`,
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin('./src/core/lib/locale/request.ts')
export default withNextIntl(nextConfig)
