<template>
  <div class="tm-frame-main" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
export default {
  name: "tm-frame-main",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      if (this.$parent && this.$parent.isFrmae) {
      }
      return {};
    },
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {},
};
</script>
