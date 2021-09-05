<template>
  <div class="tm-frame-header" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
export default {
  name: "tm-frame-header",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "height", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      let height = this.height;
      if (co.isNotEmpty(height)) {
        res.height = height;
      }
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>
