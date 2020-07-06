<template>
  <div id="app">
    <div style="cursor: pointer;" @click="shiny = !shiny">
      <img :src="shiny ? random.sprites.front_shiny : random.sprites.front_default" :alt="random.name">
      <p class="text-capitalize" v-text="random.name"></p>
    </div>

    <a href="http://localhost:8080">
      Get random Pokémon
    </a>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data: () => ({
    shiny: false,
    random: {
      sprites: {}
    }
  }),
  
  apollo: {
    random: gql`query {
      random {
        id
        name
        sprites {
          front_shiny
          front_default
        }
      }
    }`
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.text-capitalize {
  text-transform: capitalize;
}
</style>
