<script>
export default {
  data () {
    return {
      value: '我是按钮'
    }
  },
  methods: {
    click () {
      this.value = '点击过'
    }
  }
}
</script>
## 基础样式
Team IDE UI 提供一些基础样式
:::demo
``` html
<template>
  <span class="pd-10" >.pd-(1~10)</span>
  <span class="pd-10" >.pd-(10,15,20···100)</span>

  <span class="mg-10" >.mg-(1~10)</span>
  <span class="mg-10" >.mg-(10,15,20···100)</span>
  
  <span class="ft-15" >.ft-(1~10)</span>
  <span class="ft-15" >.ft-(10,15,20···100)</span>
</template>
<script>
</script>
```
:::