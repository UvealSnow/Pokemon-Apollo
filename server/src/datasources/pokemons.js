const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getAllPokemons({ per_page = 20, page = 1 }) {
    const res =  await this.get(`pokemon`, {
      limit: per_page,
      offset: page * per_page 
    })

    return Array.isArray(res.results) ?
      res.results.map(pokemon => this.pokemonReducer(pokemon)) : []
  }

  async getRandomPokemon() {
    const rand = Math.floor(Math.random() * Math.floor(807))
    return await this.get(`pokemon/${rand}`)
  }

  async getPokemonById({ id }) {
    return this.pokemonReducer(await this.get(`pokemon/${id}`))
  }

  getPokemonsById({ ids }) {
    return Promise.all(
      ids.map(id => this.getPokemonById({ id }))
    )
  }

  getPokemonsByRange({ min, max }) {
    return Promise.all(
      Array.from(Array(max-min), (_, i) => i + min).map(id => this.getPokemonById({ id }))
    )
  }

  pokemonReducer(pokemon) {
    return {
      id: pokemon.id || pokemon.url.split('/')[6],
      name: pokemon.name,
      stats: Array.isArray(pokemon.stats) ?
        pokemon.stats.map(stat => this.statsReducer(stat)) : [],
      types: Array.isArray(pokemon.types) ?
        pokemon.types.map(type => this.typeReducer(type)) : [],
      sprites: pokemon.sprites || null
    }
  }

  statsReducer(stat) {
    return {
      base_stat: stat.base_stat,
      effort: stat.effort,
      name: stat.stat.name
    }
  }

  typeReducer(type) {
    return {
      slot: type.slot,
      name: type.type.name,
    }
  }
}

module.exports = PokemonAPI
