<template>
  <div class="tm-frame-part" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
export default {
  name: "tm-frame-part",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "width", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      let width = this.width;
      if (co.isNotEmpty(width)) {
        res.width = width;
      } else {
        if (
          this.$parent &&
          this.$parent.$slots &&
          this.$parent.$slots.default
        ) {
          this.$parent.$slots.default.some((vnode, index) => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            if (tag == "tm-frame-part") {
              res.flex = "1";
            }
          });
        }
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