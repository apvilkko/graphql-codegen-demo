import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

export const createClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    uri: 'http://localhost:4001',
    cache: new InMemoryCache(),
  })

export * from './generated/graphql'
