<template>
  <div class="tm-panel" :class="classObject" @click="handleClick">
    <div class="tm-panel-header">
      <span v-html="title"></span>
      <slot name="header"></slot>
    </div>
    <div class="tm-panel-body">
      <slot></slot>
    </div>
    <div class="tm-panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-panel",
  data() {
    return {};
  },
  props: ["title", "bdcolor", "bdwidth", "bdplace", "rd"],
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

