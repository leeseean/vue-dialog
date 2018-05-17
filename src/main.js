// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueDialog from './vue-dialog'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { VueDialog },
  template: `
    <vue-dialog @show="dialogShowCb" @confirm="confirmCallback" :cancel="cancelCallback" :is-mask="isMask" :dialog-width="dialogWidth" :dialog-height="dialogHeight" :title="title" :confirm-btn-id="confirmBtnId" :confirm-btn-value="confirmBtnValue" :cancel-btn-id="cancelBtnId" :cancel-btn-value="cancelBtnValue">
      <input v-model="inputValue">
    </vue-dialog>`,
  data: {
    isMask: true,
    inputValue: 5,
    title: '大话西游',
    confirmBtnId: '123',
    confirmBtnValue: '缺额',
    cancelBtnId: '456',
    cancelBtnValue: '消失',
    dialogHeight: '100px',
    dialogWidth: '100px'
  },
  methods: {
    dialogShowCb() {
      console.log('show')
    },
    confirmCallback() {
      console.log('confirm')
    },
    cancelCallback() {
      console.log('cancel')
    }
  }
}) 
