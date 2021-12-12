<template>
  <li class="tm-nav-sub" :class="classObject" @click="handleClick">
    <a :href="href" :target="target">
      <span v-if="html != null && html != ''" v-html="html"></span>
      <span v-else-if="text != null && text != ''" v-text="text"></span>
    </a>
    <ul>
      <template v-if="items != null">
        <template v-for="(item, index) in items">
          <NavItem :key="index" :item="item"></NavItem>
        </template>
      </template>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
import NavItem from "./NavItem";
export default {
  name: "tm-nav-sub",
  components: { NavItem },
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
    "items",
  ],
  computed: {
    classObject: BaseVue.classObject,
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
  mounted() {},
  destroyed() {},
};
</script>