<script>
export default {
  data () {
    return {
      teamide
    }
  },
  methods: {
  }
}
</script>
## Color
颜色
:::demo
``` html
<template>
  <tm-color color="orange" >.color-orange</tm-color>
  <tm-color bg="orange" >.bg-orange</tm-color>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
```
:::


可选配色
:::demo
``` html
<template>
  <template v-for="color in teamide.style.config.colors">
    <tm-row v-if="color.value == 'white'" class="mgb-10">
      <tm-col col="6">
        <tm-color class="mgr-10 pd-5" :color="color.value" bg="black">
          颜色 {{color.text}} .color-{{color.value}} {{color.colors[0]}}</tm-color>
      </tm-col>
      <tm-col col="6">
        <tm-color class="mgr-10 pd-5" :bg="color.value">
          背景 {{color.text}} .bg-{{color.value}} {{color.colors[0]}}</tm-color>
      </tm-col>
    </tm-row>
    <tm-row v-if="color.value != 'white'" class="mgb-10">
      <tm-col col="6">
        <tm-color class="mgr-10 pd-5" :color="color.value">
          颜色 {{color.text}} .color-{{color.value}} {{color.colors[0]}}
        </tm-color>
      </tm-col>
      <tm-col col="6">
        <tm-color class="mgr-10 pd-5" :bg="color.value">
          背景 {{color.text}} .bg-{{color.value}} {{color.colors[0]}}</tm-color>
    </tm-row>
    </tm-col>
  </template>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
```
:::