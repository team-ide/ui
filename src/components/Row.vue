<template>
  <div class="tm-row" :class="classObject" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";

export default {
  name: "tm-row",
  data() {
    return {};
  },
  props: ["bd", "bdcolor", "pd", "mg", "rd"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
};
</script>