import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入组件
import TeamideUI from '../src'
Vue.use(TeamideUI)

// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)
// 引入项目样式入口
import './assets/less/index.less'

// 引入路由
import routes from './route.js'
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  render(createElement) {
    return createElement(App)
  },
  router
}).$mount('#app')
