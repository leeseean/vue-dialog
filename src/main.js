// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueDialog from './components/vue-dialog'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    VueDialog
  },
  template: `
    <div>
      <vue-dialog @confirm="confirmCallback" @cancel="cancelCallback" :skin="dialogConfig.skin" :is-dialog="dialogConfig.isDialog" :is-mask="dialogConfig.isMask" :is-cancel-btn="dialogConfig.isCancelBtn" :is-confirm-btn="dialogConfig.isConfirmBtn" :dialog-width="dialogConfig.dialogWidth" :dialog-height="dialogConfig.dialogHeight" :title="dialogConfig.title" :confirm-btn-id="dialogConfig.confirmBtnId" :confirm-btn-value="dialogConfig.confirmBtnValue" :cancel-btn-id="dialogConfig.cancelBtnId" :cancel-btn-value="dialogConfig.cancelBtnValue">
        <p style="text-align:center">你好</p>
      </vue-dialog>
      <div style="margin:auto;width:280px;line-height:2;transform: translateY(30%);">
        <h6>对话框配置</h6>
        <p>皮肤：<input type="text" v-model="dialogConfig.skin"/></p>
        <p>是否显示遮罩层：<input type="radio" value="是" v-model="dialogConfig.isMask"/>是<input type="radio" value="" v-model="dialogConfig.isMask"/>否</p>
        <p>标题：<input type="text" v-model="dialogConfig.title"/></p>
        <p>是否显示确认按钮：<input type="radio" value="是" v-model="dialogConfig.isConfirmBtn"/>是<input type="radio" value="" v-model="dialogConfig.isConfirmBtn"/>否</p>
        <p>是否显示取消按钮：<input type="radio" value="是" v-model="dialogConfig.isCancelBtn"/>是<input type="radio" value="" v-model="dialogConfig.isCancelBtn"/>否</p>
        <p>确认按钮ID：<input type="text" v-model="dialogConfig.confirmBtnId"/></p>
        <p>取消按钮ID：<input type="text" v-model="dialogConfig.cancelBtnId"/></p>
        <p>确认按钮文字：<input type="text" v-model="dialogConfig.confirmBtnValue"/></p>
        <p>取消按钮文字：<input type="text" v-model="dialogConfig.cancelBtnValue"/></p>
        <p>弹框宽度：<input type="text" v-model="dialogConfig.dialogWidth"/></p>
        <p>弹框高度：<input type="text" v-model="dialogConfig.dialogHeight"/></p>   
        <p style="text-align: center;"><button @click="dialogConfig.isDialog = true" style="cursor:pointer;">打开对话框</button></p> 
      </div>
    </div>
  `,
  data: {
    inputValue: 5,
    dialogConfig: {
      skin: 'blue',
      isDialog: false,
      isMask: false,
      title: 'ssss',
      isConfirmBtn: false,
      confirmBtnId: '123',
      confirmBtnValue: '缺额',
      isCancelBtn: false,
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
