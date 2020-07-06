const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')

const resolvers = require('./resolvers')

const PokemonAPI = require('./datasources/pokemons')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI()
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`)
})
