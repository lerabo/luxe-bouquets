import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['uk', 'en'],
  localePrefix: 'as-needed',
  defaultLocale: 'uk',
  localeDetection: false,
})
