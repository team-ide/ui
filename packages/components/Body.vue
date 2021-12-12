<template>
  <div class="tm-body" :class="classObject" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-body",
  data() {
    return {};
  },
  props: ["bdcolor", "bd", "pd", "mg"],
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
