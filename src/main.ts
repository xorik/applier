import Vue, { CreateElement, VNode } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// @ts-ignore
import VueTextareaAutosize from 'vue-textarea-autosize'
// @ts-ignore
import draggable from 'vuedraggable'
import App from './App.vue'
import { store } from './store'
import './icons'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('draggable', draggable)
Vue.use(VueTextareaAutosize)

new Vue({
  render: (h: CreateElement): VNode => h(App),
  store,
}).$mount('#app')
