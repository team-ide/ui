<template>
  <div class="tm-col" :class="classObject" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-col",
  data() {
    return {};
  },
  props: ["col", "bdcolor", "bd", "pd", "mg", "rd"],
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
