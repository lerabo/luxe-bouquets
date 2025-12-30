import { Inter as FontSecondary, Nunito as FontPrimary } from 'next/font/google'

// font primary
export const fontPrimary = FontPrimary({
  subsets: ['latin'],
  preload: true,
})

// font secondary
export const fontSecondary = FontSecondary({
  subsets: ['latin'],
  preload: true,
  variable: '--font-secondary',
})
