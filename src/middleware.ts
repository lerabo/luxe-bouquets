import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './core/lib/locale/routing'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const pathname = url.pathname

  // Lowercase normalization
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url, 301)
  }

  // Collapse multiple slashes
  const normalizedPath = pathname.replace(/\/+/g, '/')

  // ⚠️ Do NOT add trailing slash manually
  if (pathname !== normalizedPath) {
    url.pathname = normalizedPath
    return NextResponse.redirect(url, 301)
  }

  const handleI18nRouting = createMiddleware(routing)
  const response = handleI18nRouting(req)

  response.headers.set('x-current-path', pathname)

  return response
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
