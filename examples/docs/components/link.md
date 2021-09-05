<script>
export default {
  data () {
    return {
      teamide
    }
  },
  methods: {
    click () {
    }
  }
}
</script>
## Link
连接
:::demo
``` html
<template>
  <tm-link >连接</tm-link>
  <tm-link color="orange">连接</tm-link>
  <tm-link color="green">连接</tm-link>
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



#### 配色
:::demo
``` html
<template>
  <template v-for="color in teamide.style.config.colors">
    <tm-link v-if="color.value != 'white'" class="mgr-10" :color="color.value">{{color.text}}</tm-link>
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