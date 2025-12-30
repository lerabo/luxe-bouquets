import { heroui } from '@heroui/theme'

// theme
export const herouiTheme = heroui({
  layout: {
    dividerWeight: '1px',
    disabledOpacity: 0.5,
  },
  themes: {
    light: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
      },
    },
  },
})
