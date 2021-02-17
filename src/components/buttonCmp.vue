<template>
  <button :class="`${classDisabled}`">
    <img v-if="icon" :src="icon" alt="IconButton" srcset="" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "button",
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
  },

  computed: {
    classDisabled() {
      return this.disabled ? "disabled" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 45px;
  border-radius: 60px;
  color: white;
  background-color: #f22539;
  border-color: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  padding: 11px 20px;
  display: flex;
  &.disabled {
    background-color: #bfbfbf;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active:not(.disabled) {
    background: #c00e20;
  }
  img {
    margin-right: 10px;
  }
}
</style>
