<template>
  <div class="page-container">
    <div class="searcher">
      <input-cmp
        placeholder="Search"
        icon="/icons/lupa.svg"
        v-model="query"
        @keypress.enter="filterPokemons"
      />
    </div>
    <div class="list" v-if="option === 1">
      <div v-if="pokemons">
        <pokemon-item
          v-for="pokemon in pokemonsFiltered"
          :name="pokemon.name"
          :key="pokemon.name"
          :isFavorite="pokemon.isFavorite"
          :url="pokemon.url"
          @change-favorite-status="changeFavoriteStatus(pokemon)"
        />
      </div>
    </div>
    <div class="list-favorites" v-else>
      <div v-if="pokemons">
        <pokemon-item
          v-for="pokemon in favoritePokemons"
          :name="pokemon.name"
          :key="pokemon.name"
          :isFavorite="pokemon.isFavorite"
          :url="pokemon.url"
          @change-favorite-status="changeFavoriteStatus(pokemon)"
        />
      </div>
    </div>
    <div class="navigation-menu" v-if="pokemons">
      <div class="contenedor-buttons">
        <button-cmp
          icon="/icons/listIcon.svg"
          text="All"
          :disabled="option != 1"
          @click="option = 1"
        />
        <button-cmp
          icon="/icons/star.svg"
          text="Favorite"
          :disabled="option != 2"
          @click="option = 2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCmp from "../components/buttonCmp.vue";
import InputCmp from "../components/inputCmp.vue";
import PokemonItem from "../components/List/pokemonItem.vue";
export default {
  name: "List",
  components: {
    InputCmp,
    ButtonCmp,
    PokemonItem,
  },
  data() {
    return {
      query: "",
      pokemons: null,
      pokemonsFiltered: [],
      option: 1,
    };
  },
  watch: {
    query() {
      if (this.query === "") this.pokemonsFiltered = this.pokemons;
    },
  },
  computed: {
    favoritePokemons() {
      return this.pokemons.filter((pk) => {
        if (pk.isFavorite) return pk;
      });
    },
  },
  mounted() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const res = await this.axios.get(
          `https://pokeapi.co/api/v2/pokemon${
            this.query ? "/" + this.query : ""
          }`
        );
        if (res.status === 200) {
          this.pokemons = res.data.results.map((pk) => {
            return { ...pk, isFavorite: false };
          });
          this.pokemonsFiltered = this.pokemons;
        }
      } catch (error) {
        console.dir(error);
        this.pokemons = null;
      }
    },

    filterPokemons() {
      this.pokemonsFiltered = this.pokemons.filter((pk) => {
        console.log(pk.name.indexOf(this.query));
        if (pk.name.indexOf(this.query) > -1) return pk;
      });
    },

    toHome() {
      this.$router.push({ name: "Home" });
    },

    changeFavoriteStatus(pokemon) {
      pokemon.isFavorite = !pokemon.isFavorite;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  .searcher {
    max-width: 85vw;
    padding: 20px;
  }
  .list {
    max-width: 85vw;
    padding: 0px 20px;
    height: calc(100vh - 170px);
    overflow-y: scroll;
  }
  .list-favorites {
    padding: 0px 20px;
    height: calc(100vh - 170px);
    overflow-y: scroll;
  }
  .navigation-menu {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    height: 80px;
    align-items: center;
    .contenedor-buttons {
      width: 85vw;
      display: flex;
      justify-content: space-between;
      button {
        width: inherit;
        max-width: 40vw;
      }
    }
  }
}
</style>
