const { gql } = require('apollo-server')

const typeDefs = gql`
type Pokemon {
  id: ID!
  name: String!
  stats: [Stat]!
  abilities: [Ability]!
}

type Ability {
  name: String!
  is_hidden: Boolean!
}

type Stat {
  base_state: Int!
  name: String!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  pokemons: [Pokemon]!
  pokemon(id: ID!): Pokemon
}
`

module.exports = typeDefs
