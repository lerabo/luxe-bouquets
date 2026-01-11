import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'

import { FC, ReactNode } from 'react'

import { LayoutComponent } from '@/app/module/layout'
import { LayoutCore } from '@/core'
import { client } from '@/core/layout.core'
import { routing } from '@/core/lib/locale/routing'

import { IFooter, ISettings, ISidebar, ITextInSite } from '../../../../@types/generated/contentful'

export { generateMetadata, viewport } from '@/core'

// interface
interface ILayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function getSettings() {
  const [settings, textInSite, sidebar, footer] = await Promise.all([
    client.getEntries({ content_type: 'settings' }),
    client.getEntries({ content_type: 'textInSite' }),
    client.getEntries({ content_type: 'sidebar' }),
    client.getEntries({ content_type: 'footer' }),
  ])

  return {
    settings: settings.items,
    textInSite: textInSite.items,
    sidebar: sidebar.items,
    footer: footer.items,
  } as {
    settings: ISettings[]
    textInSite: ITextInSite[]
    sidebar: ISidebar[]
    footer: IFooter[]
  }
}

// component
const RootLayout: FC<Readonly<ILayoutProps>> = async (props) => {
  const settings = await getSettings()
  const { children, params } = props

  const paramsResult = await params

  if (!hasLocale(routing.locales, paramsResult?.locale)) {
    notFound()
  }

  // return
  return (
    <LayoutCore locale={paramsResult?.locale}>
      <LayoutComponent settings={settings}>{children}</LayoutComponent>
    </LayoutCore>
  )
}

export default RootLayout
