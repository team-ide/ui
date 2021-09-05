<script>
export default {
  data () {
    return {
      teamide
    }
  },
  methods: {
    click () {
      this.value = '点击过'
    }
  }
}
</script>
## Nav
导航
:::demo
``` html
<template>
  <tm-nav horizontal="true">
    <tm-nav-item @click="click">导航1</tm-nav-item>
    <tm-nav-item @click="click">导航2</tm-nav-item>
    <tm-nav-item @click="click">导航3</tm-nav-item>
    <tm-nav-sub text="导航4">
      <tm-nav-item @click="click">导航4-1</tm-nav-item>
      <tm-nav-item @click="click">导航4-2</tm-nav-item>
      <tm-nav-item @click="click">导航4-3</tm-nav-item>
    </tm-nav-sub>
    <tm-nav-item @click="click">导航5</tm-nav-item>
    <tm-nav-sub text="导航6">
      <tm-nav-item @click="click">导航6-1</tm-nav-item>
      <tm-nav-item @click="click">导航6-2</tm-nav-item>
      <tm-nav-item @click="click">导航6-3</tm-nav-item>
    </tm-nav-sub>
  </tm-nav>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    click () {
    }
  }
}
</script>
```
:::


#### 其它
:::demo
``` html
<template>
  <tm-row class="mgb-10">
    <tm-nav horizontal="true">
      <tm-nav-item>导航1</tm-nav-item>
      <tm-nav-item>导航2</tm-nav-item>
      <tm-nav-item>导航3</tm-nav-item>
      <tm-nav-sub text="导航4">
        <tm-nav-item>导航4-1</tm-nav-item>
        <tm-nav-item>导航4-2</tm-nav-item>
        <tm-nav-item>导航4-3</tm-nav-item>
      </tm-nav-sub>
      <tm-nav-item>导航5</tm-nav-item>
      <tm-nav-sub text="导航6">
        <tm-nav-item>导航6-1</tm-nav-item>
        <tm-nav-item>导航6-2</tm-nav-item>
        <tm-nav-item>导航6-3</tm-nav-item>
      </tm-nav-sub>
    </tm-nav>
  </tm-row>
  <tm-row class="mgb-10">
    <tm-nav style="width: 200px;">
      <tm-nav-item>导航1</tm-nav-item>
      <tm-nav-item>导航2</tm-nav-item>
      <tm-nav-item>导航3</tm-nav-item>
      <tm-nav-sub text="导航4">
        <tm-nav-item>导航4-1</tm-nav-item>
        <tm-nav-item>导航4-2</tm-nav-item>
        <tm-nav-item>导航4-3</tm-nav-item>
      </tm-nav-sub>
      <tm-nav-item>导航5</tm-nav-item>
      <tm-nav-sub text="导航6">
        <tm-nav-item>导航6-1</tm-nav-item>
        <tm-nav-item>导航6-2</tm-nav-item>
        <tm-nav-item>导航6-3</tm-nav-item>
      </tm-nav-sub>
    </tm-nav>
  </tm-row>
  <tm-row class="mgb-10">
    <tm-nav color="green" horizontal="true">
      <tm-nav-item>导航1</tm-nav-item>
      <tm-nav-item>导航2</tm-nav-item>
      <tm-nav-item>导航3</tm-nav-item>
      <tm-nav-sub text="导航4">
        <tm-nav-item>导航4-1</tm-nav-item>
        <tm-nav-item>导航4-2</tm-nav-item>
        <tm-nav-item>导航4-3</tm-nav-item>
      </tm-nav-sub>
      <tm-nav-item>导航5</tm-nav-item>
      <tm-nav-sub text="导航6">
        <tm-nav-item>导航6-1</tm-nav-item>
        <tm-nav-item>导航6-2</tm-nav-item>
        <tm-nav-item>导航6-3</tm-nav-item>
      </tm-nav-sub>
    </tm-nav>
  </tm-row>
  <tm-row class="mgb-10">
    <tm-nav bg="green" horizontal="true">
      <tm-nav-item>导航1</tm-nav-item>
      <tm-nav-item>导航2</tm-nav-item>
      <tm-nav-item>导航3</tm-nav-item>
      <tm-nav-sub text="导航4">
        <tm-nav-item>导航4-1</tm-nav-item>
        <tm-nav-item>导航4-2</tm-nav-item>
        <tm-nav-item>导航4-3</tm-nav-item>
      </tm-nav-sub>
      <tm-nav-item>导航5</tm-nav-item>
      <tm-nav-sub text="导航6">
        <tm-nav-item>导航6-1</tm-nav-item>
        <tm-nav-item>导航6-2</tm-nav-item>
        <tm-nav-item>导航6-3</tm-nav-item>
      </tm-nav-sub>
    </tm-nav>
  </tm-row>

  <template v-for="size in teamide.style.config.sizes">
    <tm-row v-if="size.name != ''" class="mgb-10">
      <tm-nav :size="size.name" horizontal="true">
        <tm-nav-item>导航1</tm-nav-item>
        <tm-nav-item>导航2</tm-nav-item>
        <tm-nav-item>导航3</tm-nav-item>
        <tm-nav-sub text="导航4">
          <tm-nav-item>导航4-1</tm-nav-item>
          <tm-nav-item>导航4-2</tm-nav-item>
          <tm-nav-item>导航4-3</tm-nav-item>
        </tm-nav-sub>
        <tm-nav-item>导航5</tm-nav-item>
        <tm-nav-sub text="导航6">
          <tm-nav-item>导航6-1</tm-nav-item>
          <tm-nav-item>导航6-2</tm-nav-item>
          <tm-nav-item>导航6-3</tm-nav-item>
        </tm-nav-sub>
      </tm-nav>
    </tm-row>
  </template>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    click () {
    }
  }
}
</script>
```
:::