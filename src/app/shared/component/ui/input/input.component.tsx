'use client'

import { Input } from '@heroui/input'
import { extendVariants } from '@heroui/system'

const CustomInputComponent = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        input: 'placeholder:text-content1-300 text-sm',
        inputWrapper:
          'border rounded-none border-content1-200 px-0 min-h-0 h-auto px-4 laptop:py-4 py-[13px]',
      },
    },
  },
})

export default CustomInputComponent
