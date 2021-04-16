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

export const SAVE_POKEMON = gql`
  mutation SavePokemon($pokemon: PokemonInput!) {
    createPokemon(pokemon: $pokemon) {
      name
      id
      type
    }
  }
`
