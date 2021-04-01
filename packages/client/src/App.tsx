import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Main } from './Main'
import './style.css'

const client = new ApolloClient({
  uri: 'http://localhost:4001',
  cache: new InMemoryCache(),
})

export const App: React.FC<Record<string, unknown>> = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <h1>GraphQL Code Generator With TypeScript Demo</h1>
        <Main />
      </>
    </ApolloProvider>
  )
}
