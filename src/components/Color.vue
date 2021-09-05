<template>
  <span :class="classObject" @click="handleClick">
    <slot></slot>
  </span>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-color",
  data() {
    return {};
  },
  props: ["color", "bg", "disabled"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  destroyed() {}
};
</script>