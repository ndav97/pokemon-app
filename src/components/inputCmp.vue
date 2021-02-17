<template>
  <div class="input-container">
    <img v-if="icon" :src="icon" />
    <input
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "inputCmp",
  props: {
    icon: String,
    placeholder: String,
    modelValue: {
      default: "",
    },
  },

  emits: ["update:modelValue"],

  data() {
    return {
      copy: this.modelValue,
    };
  },

  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  img {
    max-width: 18px;
    margin: 0px 15px;
  }
  input {
    width: -webkit-fill-available;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #353535;
    &:focus {
      border: none;
      outline: none;
    }
    &::placeholder {
      color: #bfbfbf;
    }
  }
}
</style>
