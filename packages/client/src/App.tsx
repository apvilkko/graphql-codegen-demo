import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { createClient } from '@mydemo/api'
import { Main } from './Main'
import './style.css'

const client = createClient()

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
