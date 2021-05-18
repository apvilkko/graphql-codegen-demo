import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  enum PokemonType {
    BUG
    FIRE
    ELECTRIC
    WATER
  }

  type TextField {
    value: String
  }

  type Pokemon {
    id: Int
    name: TextField
    # name: String
    type: PokemonType
  }

  input PokemonInput {
    name: String
    type: PokemonType
  }

  type Query {
    entries: [Pokemon]
  }

  type Mutation {
    createPokemon(pokemon: PokemonInput): Pokemon
  }
`

const data = ['Metapod,11,BUG', 'Charmander,4,FIRE', 'Pikachu,25,ELECTRIC'].map((item) => {
  const x = item.split(',')
  return {
    id: Number(x[1]),
    //name: x[0],
    name: { value: x[0] },
    type: x[2],
  }
})

let nextId = 100

const resolvers = {
  Query: {
    entries: () => data,
  },
  Mutation: {
    createPokemon: (_root, args) => {
      //const newItem = { id: nextId++, ...args.pokemon }
      const newItem = { id: nextId++, ...args.pokemon, name: { value: args.pokemon.name } }
      data.push(newItem)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return newItem
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen({ port: 4001 })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
  .catch((err) => console.error(err))
