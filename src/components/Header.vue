<template>
  <div class="tm-header" :class="classObject" @click="handleClick">
    <span v-html="title"></span>
    <slot></slot>
    <div class="tm-header-nav">
      <slot name="nav"></slot>
    </div>
  </div>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-header",
  data() {
    return {};
  },
  props: ["title", "bdcolor", "bdwidth"],
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