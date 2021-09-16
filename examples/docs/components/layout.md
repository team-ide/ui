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

## Layout

上下布局
:::demo
``` html
<template>
  <div style="height: 300px;" class="bg-orange color-white">
    <tm-layout height="100%">
      <tm-layout height="30px">
        layout1
      </tm-layout>
      <tm-layout-bar bottom></tm-layout-bar>
      <tm-layout height="auto">
        layout2
      </tm-layout>
      <tm-layout-bar top></tm-layout-bar>
      <tm-layout height="30px">
        layout3
      </tm-layout>
    </tm-layout>
  </div>
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

左右布局
:::demo
``` html
<template>
  <div style="height: 300px;" class="bg-orange color-white">
    <tm-layout height="100%" width="100%">
      <tm-layout width="200px">
        layout1
      </tm-layout>
      <tm-layout-bar right></tm-layout-bar>
      <tm-layout width="auto">
        layout2
      </tm-layout>
      <tm-layout-bar left></tm-layout-bar>
      <tm-layout width="200px">
        layout3
      </tm-layout>
    </tm-layout>
  </div>
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

混合布局
:::demo
``` html
<template>
  <div style="height: 300px;" class="bg-orange color-white">
    <tm-layout height="100%" width="100%">
      <tm-layout height="30px">
        layout1
      </tm-layout>
      <tm-layout-bar bottom></tm-layout-bar>
      <tm-layout height="auto">
        <tm-layout width="200px">
          layout2
        </tm-layout>
        <tm-layout-bar right color="red"></tm-layout-bar>
        <tm-layout width="auto">
          layout3
        </tm-layout>
        <tm-layout-bar left color="red"></tm-layout-bar>
        <tm-layout width="200px">
          layout4
        </tm-layout>
      </tm-layout>
      <tm-layout-bar top></tm-layout-bar>
      <tm-layout height="30px">
        layout5
      </tm-layout>
    </tm-layout>
  </div>
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

```
:::