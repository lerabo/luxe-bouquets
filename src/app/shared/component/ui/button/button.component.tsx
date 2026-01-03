'use client'

import { Button } from '@heroui/button'
import { extendVariants } from '@heroui/system'

const CustomButtonComponent = extendVariants(Button, {
  variants: {
    variant: {
      solid:
        'bg-foreground px-6 laptop:py-4 py-3.5 gap-2 data-[hover=true]:!opacity-100 data-[hover=true]:bg-content1-400 text-background laptop:text-medium h-auto rounded-none border-0 text-sm font-medium uppercase transition-colors duration-200',
      bordered:
        'data-[hover=true]:bg-foreground text-foreground data-[hover=true]:text-background h-auto rounded-none border bg-transparent px-6 laptop:py-4 py-3.5 leading-none uppercase transition-colors duration-200',
      default: 'bg-none p-0 rounded-none min-w-0',
    },
  },
})

export default CustomButtonComponent
