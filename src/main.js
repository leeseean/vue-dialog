// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Dialog from './assets/js/vendor/dialog'

Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div>
      <div style="margin:autowidth:280pxline-height:2transform: translateY(30%)">
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
        <p style="text-align: center"><button @click="showDialog(dialogConfig)" style="cursor:pointer">打开对话框</button></p> 
      </div>
    </div>
  `,
  data: {
    inputValue: 5,
    dialogConfig: {
      skin: 'blue',
      content: `<p style="text-align:center">你好</p>`,
      isDialog: false,
      isMask: false,
      title: '标题标题标题标题',
      height: 'auto',
      width: 'auto',
      zIndex: 1024,
      button: [
        {
          value: '同意',
          callback() {
            this
            .content('你同意了')
            return false;
          },
          autofocus: true
        },
        {
          value: '不同意',
          callback() {
            alert('你不同意')
          }
        },
        {
          id: 'button-disabled',
          value: '无效按钮',
          disabled: true
        },
        {
          value: '关闭我'
        }
      ],
      onShow() {},
      onClose() {}
    },
  },
  methods: {
    showDialog(config) {
      this.$dialog(config).show()
    }
  }
})
