// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueDialog from './vue-dialog'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    VueDialog
  },
  template: `
    <vue-dialog @show="dialogShowCb" @confirm="confirmCallback" @cancel="cancelCallback" :is-dialog="dialogConfig.isDialog" :is-mask="dialogConfig.isMask" :is-cancel-btn="dialogConfig.isCancelBtn" :is-confirm-btn="dialogConfig.isConfirmBtn" :dialog-width="dialogConfig.dialogWidth" :dialog-height="dialogConfig.dialogHeight" :title="dialogConfig.title" :confirm-btn-id="dialogConfig.confirmBtnId" :confirm-btn-value="dialogConfig.confirmBtnValue" :cancel-btn-id="dialogConfig.cancelBtnId" :cancel-btn-value="dialogConfig.cancelBtnValue">
      <input v-model="inputValue">
    </vue-dialog>`,
  data: {
    inputValue: 5,
    dialogConfig: {
      skin: '',
      isDialog: true,
      isMask: true,
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
  },
  watch: {
    'dialogConfig.isDialog': {
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
