import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from './routes/routes'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
