'use client'

import { ProgressProvider } from '@bprogress/next/app'

import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider height='4px' color={'hsl(var(--heroui-secondary))'} shallowRouting>
      {children}
    </ProgressProvider>
  )
}

export default Providers
