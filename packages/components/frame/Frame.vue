<template>
  <div class="tm-frame" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
export default {
  name: "tm-frame",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>
