import { FC, ReactNode } from 'react'

import { FooterComponent, HeaderComponent } from '@/app/module/layout/elements'

// interface
interface ILayoutComponentProps {
  children: ReactNode
}

// component
const LayoutComponent: FC<Readonly<ILayoutComponentProps>> = (props) => {
  const { children } = props

  // return
  return (
    <>
      <HeaderComponent />

      <main className={'border-x'}>{children}</main>

      <FooterComponent />
    </>
  )
}

export default LayoutComponent
