import { FC, ReactNode } from 'react'

import { FooterComponent, HeaderComponent } from '@/app/module/layout/elements'
import { LayoutProvider } from '@/app/shared/context'

import { IFooter, ISettings, ISidebar, ITextInSite } from '../../../../@types/generated/contentful'

// interface
interface ILayoutComponentProps {
  children: ReactNode
  settings: {
    settings: ISettings[]
    textInSite: ITextInSite[]
    sidebar: ISidebar[]
    footer: IFooter[]
  }
}

// component
const LayoutComponent: FC<Readonly<ILayoutComponentProps>> = (props) => {
  const { children, settings } = props

  // return
  return (
    <LayoutProvider initialData={settings}>
      <HeaderComponent />

      <main className={'border-x'}>{children}</main>

      <FooterComponent />
    </LayoutProvider>
  )
}

export default LayoutComponent
