<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-if="pokemon">
          <div class="pokemon-picture">
            <img :src="pokemon.sprites.front_default" alt="Pokemon sprite" />
          </div>
          <div class="pokemon-data">
            <span class="strong">Name:</span> <span>{{ pokemon.name }}</span>
            <div class="separator" />
            <span class="strong">Weight:</span>
            <span>{{ pokemon.weight }}</span>
            <div class="separator" />
            <span class="strong">Height:</span>
            <span>{{ pokemon.height }}</span>
            <div class="separator" />
            <span class="strong">Types:</span> <span>{{ type }}</span>
            <div class="separator" />
          </div>
          <div class="actions">
            <button-cmp text="Share to my friends" @click="sharePokemon()" />
            <img :src="icon" @click="$emit('changeFavoriteStatus')" />
          </div>
          <img
            src="/icons/closeIcon.svg"
            alt="close icon"
            class="close-button"
            @click="$emit('close')"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import buttonCmp from "../buttonCmp.vue";
export default {
  components: { buttonCmp },
  name: "pokemonDetails",
  props: {
    url: {
      type: String,
      default: "",
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  computed: {
    type() {
      let types = "";
      this.pokemon.types.forEach((type) => {
        if (type.slot != 1) {
          types += ", ";
        }
        types += type.type.name;
      });
      return types;
    },
    icon() {
      return (
        "/icons/" + (this.isFavorite ? "favActive.svg" : "favInactive.svg")
      );
    },
  },
  emits: ["close", "changeFavoriteStatus"],
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      try {
        const res = await this.axios.get(this.url);
        if (res.status === 200) {
          this.pokemon = res.data;
        }
      } catch (error) {
        console.dir(error);
      }
    },
    sharePokemon() {
      const el = document.createElement("textarea");
      el.value = `${this.pokemon.name} - ${this.type}`;
      el.setAttribute("readonly", "");
      el.setAttribute("display", "none");
      // el.style.position = 'absolute';
      // el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      window.alert("Copiado al portapapeles :)");
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-picture {
  height: 220px;
  background-image: url("/images/background-pokemon.png");
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 180px;
  }
}
.pokemon-data {
  padding-top: 20px;
  margin: 0px 20px;
  .separator {
    height: 1px;
    background: #e8e8e8;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin: 10px 0px;
  }
  span.strong {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
  span:not(.strong) {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
}
.close-button {
  position: relative;
  right: -44%;
  bottom: 443px;
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
}
</style>
