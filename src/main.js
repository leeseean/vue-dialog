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
    <vue-dialog @confirm="confirmCallback" @cancel="cancelCallback" :skin="dialogConfig.skin" :is-dialog="dialogConfig.isDialog" :is-mask="dialogConfig.isMask" :is-cancel-btn="dialogConfig.isCancelBtn" :is-confirm-btn="dialogConfig.isConfirmBtn" :dialog-width="dialogConfig.dialogWidth" :dialog-height="dialogConfig.dialogHeight" :title="dialogConfig.title" :confirm-btn-id="dialogConfig.confirmBtnId" :confirm-btn-value="dialogConfig.confirmBtnValue" :cancel-btn-id="dialogConfig.cancelBtnId" :cancel-btn-value="dialogConfig.cancelBtnValue">
      <p style="text-align:center">你好</p>
    </vue-dialog>`,
  data: {
    inputValue: 5,
    dialogConfig: {
      skin: 'blue',
      isDialog: true,
      isMask: true,
      title: 'ssss',
      isConfirmBtn: true,
      confirmBtnId: '123',
      confirmBtnValue: '缺额',
      isCancelBtn: true,
      cancelBtnId: '456',
      cancelBtnValue: '消失',
      dialogHeight: 'auto',
      dialogWidth: 'auto'
    },
  },
  watch: {
    'dialogConfig.isDialog': {
      handler(newVal, oldVal) {
        if (newVal) {
          this.dialogShowCb();
        }
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
      this.dialogConfig.isDialog = false;
    }
  }
})
