<template>
  <loader v-if="loading" />
  <router-view v-show="!loading" />
</template>

<script>
import loader from "./components/loader.vue";
export default {
  components: { loader },
  name: "App",
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.sass";
</style>
