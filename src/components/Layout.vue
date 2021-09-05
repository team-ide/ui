<template>
  <div class="tm-layout" :class="classObject" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-layout",
  data() {
    return {};
  },
  props: ["col", "bd", "bdcolor", "pd", "mg", "rd"],
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
