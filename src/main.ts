import Vue, { CreateElement, VNode } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// @ts-ignore
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from './App.vue'
import './icons'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component('fa', FontAwesomeIcon)
Vue.use(VueTextareaAutosize)

new Vue({
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app')
