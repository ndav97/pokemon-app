<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <loader v-if="loading" />
  <router-view v-else />
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
#app {
  text-align: -webkit-center;
  font-family: "Lato", sans-serif;
  .text-header {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: #353535;
  }
  .text-body {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #353535;
  }
}
body {
  margin: 0px;
}
html {
  background: #f9f9f9;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  min-width: 300px;
  width: 50vw;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
