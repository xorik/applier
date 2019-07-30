import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import VuexPersistence from 'vuex-persist'
import { CategoryModule } from './CategoryModule'
import { TextModule } from './TextModule'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  modules: ['CategoryModule'],
})

const store = new Vuex.Store({
  modules: { CategoryModule, TextModule },
  plugins: [vuexLocal.plugin],
})

const categoryModule = getModule(CategoryModule, store)
const textModule = getModule(TextModule, store)

export { store, categoryModule, textModule }
