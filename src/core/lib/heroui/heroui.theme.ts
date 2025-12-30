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
        foreground: '#121212',
        success: {
          DEFAULT: '#32936F',
        },
        danger: {
          DEFAULT: '#F55F56',
        },
        content1: {
          100: '#F5F5F7',
          200: '#D2D2D7',
          300: '#808080',
          400: '#424245',
        },
      },
    },
  },
})
