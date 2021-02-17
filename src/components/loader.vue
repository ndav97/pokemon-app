<template>
  <div class="container-loading">
    <img
      class="animate__animated animate__rotateOut animate__slow animate__infinite	"
      src="@/assets/icons/Loader.svg"
      alt="pokeball loader"
    />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.container-loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 105px;
  }
}
</style>
