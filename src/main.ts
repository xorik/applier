import Vue, { CreateElement, VNode } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app')
