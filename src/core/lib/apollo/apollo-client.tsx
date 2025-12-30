'use client'

import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { ErrorLink } from '@apollo/client/link/error'
import { ApolloProvider } from '@apollo/client/react'

import { useLocale } from 'use-intl'

import { PropsWithChildren, useMemo } from 'react'

import { customToast } from '@/core/lib/react-toast'

// Error handling
const errorLink = new ErrorLink(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      customToast(message, 'error')
    })
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
    customToast((networkError as Error).message, 'error')
  }
})

// Create a NextSSRApolloClient instance
const makeClient = (locale: string) => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
    credentials: 'include',
    headers: {
      'Next-Locale': locale,
    },
  })

  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    devtools: { enabled: process.env.NODE_ENV !== 'production' },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
      mutate: { awaitRefetchQueries: true },
    },
  })
}

// Apollo provider
export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  const locale = useLocale()

  const client = useMemo(() => makeClient(locale), [locale])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
