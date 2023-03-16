import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 위에랑 같은 말
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })