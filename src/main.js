import Vue from 'vue'

import 'normalize.css'

import ElementUI from 'element-ui'

import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './icons'
import './filters'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
