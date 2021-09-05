## 快速上手

Team IDE UI使用

### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import teamide from 'teamide-ui';
import App from './App.vue';

Vue.use(teamide);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 弹窗zIndex

Team IDE UI默认弹窗zIndex是从1000开始，如果需要自定义则实现如下：

```javascript
let zIndex = 2000;
teamide.getNextZIndex = function () {
  let res = zIndex;
  zIndex++;
  return res;//
};
```

### 全局teamide函数

Team IDE UI默认将teamide绑定到window下，可以直接使用函数：

```javascript
//判定是否为空
teamide.isEmpty(arg);

```
