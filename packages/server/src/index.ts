import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  enum PokemonType {
    BUG
    FIRE
    ELECTRIC
  }

  type Pokemon {
    id: Int
    name: String
    type: PokemonType
  }

  type Query {
    entries: [Pokemon]
  }
`

const data = ['Metapod,11,BUG', 'Charmander,4,FIRE', 'Pikachu,25,ELECTRIC'].map((item) => {
  const x = item.split(',')
  return {
    id: Number(x[1]),
    name: x[0],
    type: x[2],
  }
})

const resolvers = {
  Query: {
    entries: () => data,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen({ port: 4001 })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
  .catch((err) => console.error(err))
