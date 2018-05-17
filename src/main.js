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
    <vue-dialog @show="dialogShowCb" @confirm="confirmCallback" @cancel="cancelCallback" :is-dialog="isDialog" :is-mask="isMask" :is-cancel-btn="isCancelBtn" :is-confirm-btn="isConfirmBtn" :dialog-width="dialogWidth" :dialog-height="dialogHeight" :title="title" :confirm-btn-id="confirmBtnId" :confirm-btn-value="confirmBtnValue" :cancel-btn-id="cancelBtnId" :cancel-btn-value="cancelBtnValue">
      <input v-model="inputValue">
    </vue-dialog>`,
  data: {
    isDialog: true,
    isMask: true,
    inputValue: 5,
    title: '大话西游',
    isConfirmBtn: true,
    confirmBtnId: '123',
    confirmBtnValue: '缺额',
    isCancelBtn: true,
    cancelBtnId: '456',
    cancelBtnValue: '消失',
    dialogHeight: 'auto',
    dialogWidth: '300px'
  },
  watch: {
    isDialog: {
      handler(newVal, oldVal) {
        this.dialogShowCb();
      },
      immediate: true
    }
  },
  methods: {
    dialogShowCb() {
      console.log('show')
    },
    confirmCallback() {
      this.inputValue++;
    },
    cancelCallback() {
      this.isDialog = false;
    }
  }
}) 
