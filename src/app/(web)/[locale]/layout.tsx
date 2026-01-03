import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'

import { FC, ReactNode } from 'react'

import { LayoutComponent } from '@/app/module/layout'
import { LayoutCore } from '@/core'
import { routing } from '@/core/lib/locale/routing'

export { generateMetadata, viewport } from '@/core'

// interface
interface ILayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// component
const RootLayout: FC<Readonly<ILayoutProps>> = async (props) => {
  const { children, params } = props

  const paramsResult = await params

  if (!hasLocale(routing.locales, paramsResult?.locale)) {
    notFound()
  }

  // return
  return (
    <LayoutCore locale={paramsResult?.locale}>
      <LayoutComponent>{children}</LayoutComponent>
    </LayoutCore>
  )
}

export default RootLayout
