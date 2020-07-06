module.exports = {
  Query: {
    random: (_, __, { dataSources }) => dataSources.pokemonAPI.getRandomPokemon(),
    pokemon: (_, { id }, { dataSources }) => dataSources.pokemonAPI.getPokemonById({ id }),
    pokemonsById: (_, { ids }, { dataSources }) => dataSources.pokemonAPI.getPokemonsById({ ids }),
    pokemonsByRange: (_, { min, max }, { dataSources }) => dataSources.pokemonAPI.getPokemonsByRange({ min, max }),
    pokemons: (_, { per_page, page}, { dataSources }) => dataSources.pokemonAPI.getAllPokemons({ per_page, page }),
  }
}
