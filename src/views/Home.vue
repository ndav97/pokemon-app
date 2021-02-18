<template>
  <div class="home">
    <div class="welcome-image">
      <img src="../assets/img/pikachu2.svg" alt="Pikachu-SVG" />
    </div>
    <div class="welcome-text">
      <div class="text-header">
        <span>Welcome to Pokédex</span>
      </div>
      <div class="text-body">
        <span
          >The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.</span
        >
      </div>
      <div class="button-container">
        <button-cmp text="Get Starter" @click="toList()" />
      </div>
    </div>
  </div>
</template>

<script>
//Components
import ButtonCmp from "../components/buttonCmp.vue";

export default {
  name: "Home",
  components: {
    ButtonCmp,
  },
  methods: {
    //Redirect to list page
    toList() {
      this.$router.push({ name: "List" });
    },
  },
};
</script>

<style lang="scss">
.home {
  text-align: center;
  .welcome-image {
    padding: 5vh 0px 3vh 0px;
    img {
      max-width: 90%;
    }
  }
  .welcome-text {
    padding-top: 3vh;
    .text-header {
      padding-bottom: 3vh;
    }
    .text-body {
      margin-left: auto;
      margin-right: auto;
      width: 570px;
      max-width: 90vw;
      padding-bottom: 5vh;
    }
    .button-container {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
