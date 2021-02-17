<template>
  <div class="pokemon-item">
    <span @click="seeDetails()">{{ name }}</span>
    <img :src="icon" @click="changeFavoriteStatus()" />
    <pokemon-details
      v-if="showModal"
      @close="showModal = false"
      :url="url"
      :isFavorite="isFavorite"
      @change-favorite-status="changeFavoriteStatus"
    />
  </div>
</template>

<script>
import pokemonDetails from "./pokemonDetails.vue";
export default {
  components: { pokemonDetails },
  name: "pokemonItem",
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
  },
  emits: ["changeFavoriteStatus"],
  computed: {
    icon() {
      return (
        "/icons/" + (this.isFavorite ? "favActive.svg" : "favInactive.svg")
      );
    },
  },
  methods: {
    changeFavoriteStatus() {
      this.$emit("changeFavoriteStatus");
    },
    seeDetails() {
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-item {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px;
  align-items: center;
  height: 60px;
  border-radius: 5px;
  margin-bottom: 10px;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    height: 100%;
    align-items: center;
    display: flex;
    width: -webkit-fill-available;
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
}
</style>
