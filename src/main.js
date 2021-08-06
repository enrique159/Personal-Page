import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import VueRellax from 'vue-rellax'
import 'remixicon/fonts/remixicon.css'
import { init } from 'emailjs-com';

init("user_I4jbsDl2GilwNoOqmOzAw"); 
Vue.use(VueRellax)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
