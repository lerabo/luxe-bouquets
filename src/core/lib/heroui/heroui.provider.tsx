'use client'

import { ThemeProvider } from 'next-themes'
import { HeroUIProvider } from '@heroui/system'

import { FC, ReactNode } from 'react'

// interface
interface ILayoutProviderProps {
  children: ReactNode
  locale: string
}

// component
const HerouiProvider: FC<Readonly<ILayoutProviderProps>> = (props) => {
  const { children, locale } = props

  // return
  return (
    <HeroUIProvider locale={locale}>
      <ThemeProvider defaultTheme={'light'} attribute={'class'} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  )
}

export default HerouiProvider
