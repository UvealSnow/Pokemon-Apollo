const { gql } = require('apollo-server')

const typeDefs = gql`
type Pokemon {
  id: ID!
  name: String!
  stats: [Stat]
  abilities: [Ability]
  types: [Type]
  sprites: Sprite
}

type Ability {
  name: String
  is_hidden: Boolean
}

type Stat {
  base_stat: Int
  effort: Int
  name: String
}

type Type {
  slot: Int
  name: String
}

type Sprite {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  random: Pokemon
  pokemon(id: ID!): Pokemon
  pokemonsById(ids: [Int]): [Pokemon]
  pokemonsByRange(min: Int, max: Int): [Pokemon]
  pokemons(per_page: Int, page: Int): [Pokemon]
}
`

module.exports = typeDefs
