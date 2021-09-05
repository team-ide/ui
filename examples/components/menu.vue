<template >
  <div class="menu-model">
    <el-menu :default-openeds="['1', '2', '3']" :default-active="defaultActive" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item index="/guide/install">安装</el-menu-item>
        <el-menu-item index="/guide/quikeStart">快速上手</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item index="/tool">工具</el-menu-item>
        <el-menu-item index="/info">提示&弹框</el-menu-item>
        <el-menu-item index="/components/base">基础</el-menu-item>
        <el-menu-item index="/components/color">Color</el-menu-item>
        <el-menu-item index="/components/btn">Btn</el-menu-item>
        <el-menu-item index="/components/link">Link</el-menu-item>
        <el-menu-item index="/components/nav">Nav</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/guide/install"
    };
  },
  created() {
    const path = this.$route.fullPath;
    this.defaultActive = path == "/" ? "/guide/install" : path;
  },
  methods: {}
};
</script>

<style lang="css">
</style>
