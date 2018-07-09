// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Dialog from '../assets/js/vendor/dialog'
import '../assets/css/main.css'
import Main from './components/main.vue'

Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <Main></Main>
  `,
  components: {
    Main
  }
})
