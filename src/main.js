import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routescomp from './routes.js'
//import QuantityCounter from './QuantityCounter.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const myRouter =  new VueRouter({
  routes:Routescomp,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')

//Vue.config.productionTip = false
//Vue.component('QuantityCounter', QuantityCounter)

//new Vue({
//  render: h => h(App),
//}).$mount('#app')
