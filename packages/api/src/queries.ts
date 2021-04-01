import { gql } from '@apollo/client'

export const GET_POKEMON = gql`
  query GetPokemon {
    entries {
      name
      id
      type
    }
  }
`
