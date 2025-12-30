'use client'

import { Button } from '@heroui/button'
import { extendVariants } from '@heroui/system'

const CustomButtonComponent = extendVariants(Button, {
  variants: {
    variant: {
      solid: '',
      default: 'bg-none p-0 rounded-none min-w-0',
    },
  },
})

export default CustomButtonComponent
