import { FC, ReactNode } from 'react'

import { HeaderComponent } from '@/app/module/layout/elements'

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

      <main>{children}</main>
    </>
  )
}

export default LayoutComponent
