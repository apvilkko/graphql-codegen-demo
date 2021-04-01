import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type IPokemon = {
  __typename?: 'Pokemon'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<IPokemonType>
}

export enum IPokemonType {
  Bug = 'BUG',
  Fire = 'FIRE',
  Electric = 'ELECTRIC',
}

export type IQuery = {
  __typename?: 'Query'
  entries?: Maybe<Array<Maybe<IPokemon>>>
}

export type IGetPokemonQueryVariables = Exact<{ [key: string]: never }>

export type IGetPokemonQuery = { __typename?: 'Query' } & {
  entries?: Maybe<Array<Maybe<{ __typename?: 'Pokemon' } & Pick<IPokemon, 'name' | 'id' | 'type'>>>>
}

export const GetPokemonDocument = gql`
  query GetPokemon {
    entries {
      name
      id
      type
    }
  }
`

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPokemonQuery(
  baseOptions?: Apollo.QueryHookOptions<IGetPokemonQuery, IGetPokemonQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IGetPokemonQuery, IGetPokemonQueryVariables>(GetPokemonDocument, options)
}
export function useGetPokemonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IGetPokemonQuery, IGetPokemonQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IGetPokemonQuery, IGetPokemonQueryVariables>(
    GetPokemonDocument,
    options,
  )
}
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>
export type GetPokemonQueryResult = Apollo.QueryResult<IGetPokemonQuery, IGetPokemonQueryVariables>
