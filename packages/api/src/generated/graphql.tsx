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

export type IMutation = {
  __typename?: 'Mutation'
  createPokemon?: Maybe<IPokemon>
}

export type IMutationCreatePokemonArgs = {
  pokemon?: Maybe<IPokemonInput>
}

export type IPokemon = {
  __typename?: 'Pokemon'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<IPokemonType>
}

export type IPokemonInput = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<IPokemonType>
}

export enum IPokemonType {
  Bug = 'BUG',
  Fire = 'FIRE',
  Electric = 'ELECTRIC',
  Water = 'WATER',
}

export type IQuery = {
  __typename?: 'Query'
  entries?: Maybe<Array<Maybe<IPokemon>>>
}

export type IGetPokemonQueryVariables = Exact<{ [key: string]: never }>

export type IGetPokemonQuery = { __typename?: 'Query' } & {
  entries?: Maybe<Array<Maybe<{ __typename?: 'Pokemon' } & Pick<IPokemon, 'name' | 'id' | 'type'>>>>
}

export type ISavePokemonMutationVariables = Exact<{
  pokemon: IPokemonInput
}>

export type ISavePokemonMutation = { __typename?: 'Mutation' } & {
  createPokemon?: Maybe<{ __typename?: 'Pokemon' } & Pick<IPokemon, 'name' | 'id' | 'type'>>
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
export const SavePokemonDocument = gql`
  mutation SavePokemon($pokemon: PokemonInput!) {
    createPokemon(pokemon: $pokemon) {
      name
      id
      type
    }
  }
`
export type ISavePokemonMutationFn = Apollo.MutationFunction<
  ISavePokemonMutation,
  ISavePokemonMutationVariables
>

/**
 * __useSavePokemonMutation__
 *
 * To run a mutation, you first call `useSavePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePokemonMutation, { data, loading, error }] = useSavePokemonMutation({
 *   variables: {
 *      pokemon: // value for 'pokemon'
 *   },
 * });
 */
export function useSavePokemonMutation(
  baseOptions?: Apollo.MutationHookOptions<ISavePokemonMutation, ISavePokemonMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ISavePokemonMutation, ISavePokemonMutationVariables>(
    SavePokemonDocument,
    options,
  )
}
export type SavePokemonMutationHookResult = ReturnType<typeof useSavePokemonMutation>
export type SavePokemonMutationResult = Apollo.MutationResult<ISavePokemonMutation>
export type SavePokemonMutationOptions = Apollo.BaseMutationOptions<
  ISavePokemonMutation,
  ISavePokemonMutationVariables
>
