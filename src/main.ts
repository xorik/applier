import Vue, { CreateElement, VNode } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './icons'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app')
