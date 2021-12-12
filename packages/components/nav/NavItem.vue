<template>
  <li class="tm-nav-item" :class="classObject" @click="handleClick">
    <a :href="href" :target="target">
      <span v-if="html != null && html != ''" v-html="html"></span>
      <span v-else-if="text != null && text != ''" v-text="text"></span>
      <slot></slot>
    </a>
  </li>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
export default {
  name: "tm-nav-item",
  components: {},
  data() {
    return { isTeamideNav: true };
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
    "circle",
    "item",
  ],
  computed: {
    classObject: BaseVue.classObject,
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
  mounted() {},
  destroyed() {},
};
</script>