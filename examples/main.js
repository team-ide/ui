import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

import tm from '~'

Vue.use(tm)

new Vue({
  router,
  render: h => h(App),
  created() {
  },
  mounted() {
  }
}).$mount('#app')