// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Dialog from '../asserts/js/vendor/dialog'

Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div>
      <div style="margin:auto;width:280px;line-height:2;transform: translateY(30%)">
        <h6>对话框配置</h6>
        
        <p style="text-align: center"><button @click="showDialog" style="cursor:pointer">打开对话框</button></p> 
      </div>
    </div>
  `,
  data: {
    inputValue: 5,
  },
  methods: {
    showDialog() {
      const _this = this;
      const _dialog = _this.$dialog({
        skin: 'blue',
        isDialog: false,
        isMask: true,
        title: '3',
        height: 'auto',
        width: 'auto',
        zIndex: 1024,
        content: {
          template: `<p style="text-align:center">你好{{inputValue}}</p>`,
          data() {
            return {
              inputValue: _this.inputValue
            }
          }
        },
        button: [{
            value: '同意',
            callback() {
              _dialog.content({
                template: `<p style="text-align:center">您同意了</p>`
              })
              return false
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
        statusbar: {
          template: `<label for="checkbox"><input type="checkbox" id="checkbox" v-model="checked">{{text}}</label>`,
          data() {
            return {
              checked: false,
              text: '不再提醒'
            }
          }
        },
        onShow() {},
        onClose() {}
      }).show()
    }
  }
})
/* 
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
*/