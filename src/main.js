import Vue from 'vue'
import App from './App'
// import router from './router'
// import Toast from './components/Toast'
// import Dialog from './components/Dialog'
// import http from './modules/http'

import './assets/css/normalized.css'
import './assets/css/common.css'
import './assets/css/animate.css'

/** swiper */
// import 'swiper/dist/css/swiper.min.css'

/** 引入全局http */
// Vue.prototype.$http = http

Vue.config.productionTip = false

// Vue.use(Toast)
// Vue.use(Dialog)

new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
