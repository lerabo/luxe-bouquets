import { herouiTheme } from './src/core/lib/heroui/heroui.theme'

// config
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '768px',
        laptop: '1024px',
        medium: '1200px',
        desktop: '1440px',
        large: '1600px',
      },
    },
  },
  plugins: [herouiTheme],
}

export default config
