<script>
export default {
  data () {
    return {
      teamide
    }
  },
  methods: {
    click () {
      teamide.info('点击按钮');
    }
  }
}
</script>
## Btn
按钮组件
:::demo
``` html
<template>
  <tm-btn @click="click" >按钮</tm-btn>
  <tm-btn size="xs" @click="click" >xs</tm-btn>
  <tm-btn size="sm" @click="click" >sm</tm-btn>
  <tm-btn size="md" @click="click" >md</tm-btn>
  <tm-btn size="lg" @click="click" >lg</tm-btn>
  <tm-btn @click="click" color="green">按钮</tm-btn>
  <tm-btn @click="click" bg="green">按钮</tm-btn>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    click () {
      teamide.info('点击按钮');
    }
  }
}
</script>
```
:::



#### 配色
:::demo
``` html
<template>
  <template v-for="color in teamide.style.config.colors">
    <tm-row v-if="color.value != 'white'" class="mgb-10">
      <tm-btn :color="color.value">{{color.text}}</tm-btn>
      <tm-btn :bg="color.value">{{color.value}}</tm-btn>
      <tm-btn :bg="color.value" circle="circle">圆</tm-btn>
      <template v-for="size in teamide.style.config.sizes">
        <tm-btn v-if="size.name != ''" :size="size.name" :color="color.value">{{color.text}}</tm-btn>
      </template>
      <tm-btn :color="color.value" disabled="disabled">禁用</tm-btn>
      <tm-btn :bg="color.value" disabled="disabled">禁用</tm-btn>
      <tm-btn :bg="color.value" disabled="disabled" circle="circle">禁</tm-btn>
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