<template>
  <ul class="tm-nav" :class="classObject" @click="handleClick">
    <template v-if="items != null">
      <template v-for="(item,index) in items">
        <NavItem :key="index" :item="item"></NavItem>
      </template>
    </template>
    <slot></slot>
  </ul>
</template>

<script>
import co from "../../base/index.js";
import BaseVue from "../BaseVue.js";
import NavItem from "./NavItem";
export default {
  name: "tm-nav",
  components: { NavItem },
  data() {
    return { isTeamideNav: true };
  },
  props: [
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle",
    "items",
    "vertical",
    "horizontal"
  ],
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