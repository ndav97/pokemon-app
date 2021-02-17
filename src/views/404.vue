<template>
  <div style="text-align" class="lost-section">
    <div class="text-header">
      <span>Uh-oh!</span>
    </div>
    <div class="text-body">
      <span>You look lost on your journey!</span>
    </div>
    <div class="button-home">
      <button-cmp text="Go back home" @click="toHome()" />
    </div>
  </div>
</template>

<script>
import ButtonCmp from "../components/buttonCmp.vue";
export default {
  name: "404",
  components: {
    ButtonCmp,
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.lost-section {
  text-align: center;
  padding-top: 30px;
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
  .button-home {
    display: flex;
    justify-content: center;
  }
}
</style>
