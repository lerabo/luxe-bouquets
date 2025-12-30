'use client'

import { Button } from '@heroui/button'
import { extendVariants } from '@heroui/system'

const CustomButtonComponent = extendVariants(Button, {
  variants: {
    variant: {
      solid: '',
    },
  },
})

export default CustomButtonComponent
