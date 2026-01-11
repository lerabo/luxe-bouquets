import { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'

import { createClient } from 'contentful'

import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import '@/core/style/globals.css'

import { primaryFont } from '@/core/config'
import { HeroUIProvider } from '@/core/lib/heroui'
import { ProgressBarProvider } from '@/core/lib/progress-bar'

// interface
interface ILayoutCoreProps {
  children: ReactNode
  locale: string
}

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
})

// component
const LayoutCore: FC<Readonly<ILayoutCoreProps>> = async (props) => {
  const { children, locale } = props
  // return
  return (
    <NextIntlClientProvider>
      <html lang={locale} suppressHydrationWarning>
        <body className={`${primaryFont.className} scroll-smooth`}>
          <HeroUIProvider locale={locale}>
            <ProgressBarProvider>{children}</ProgressBarProvider>
          </HeroUIProvider>
          <Toaster position='bottom-right' />
        </body>
      </html>
    </NextIntlClientProvider>
  )
}

export default LayoutCore

// metadata
export const generateMetadata = (): Metadata => {
  // return
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
    title: {
      default: 'Luxe Bouquets',
      template: `%s | Luxe Bouquets`,
    },
    description: 'Luxe Bouquets',
    applicationName: 'Luxe Bouquets',
    openGraph: {
      title: {
        default: 'Luxe Bouquets',
        template: `%s | Luxe Bouquets`,
      },
      description: 'Luxe Bouquets',
      siteName: 'Luxe Bouquets',
      images: '/icon.png',
      type: 'website',
    },
  }
}

// viewport
export const viewport: Viewport = {
  width: 'device-width',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0FCFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0e' },
  ],
}
