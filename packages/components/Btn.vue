<template>
  <a class="tm-btn" :class="classObject" :href="href" :target="target" @click="handleClick">
    <span v-if="html != null && html != ''" v-html="html"></span>
    <span v-else-if="text != null && text != ''" v-text="text"></span>
    <slot></slot>
  </a>
</template>

<script>
import co from "../base/index.js";
import BaseVue from "./BaseVue.js";
export default {
  name: "tm-btn",
  data() {
    return { isTeamideBtn: true };
  },
  props: [
    "href",
    "target",
    "html",
    "text",
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle"
  ],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  destroyed() {}
};
</script>