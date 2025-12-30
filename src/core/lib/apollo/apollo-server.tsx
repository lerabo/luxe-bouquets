import { cookies } from 'next/headers'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// Apollo server-side client
export const getClient = async () => {
  const allCookies = await cookies()
  const cookieLocale = allCookies.get('NEXT_LOCALE')?.value

  const locale = cookieLocale ?? 'uk'

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
      credentials: 'include',
      headers: {
        'Next-Locale': locale,
      },
    }),
    devtools: { enabled: process.env.NODE_ENV !== 'production' },
  })
}
