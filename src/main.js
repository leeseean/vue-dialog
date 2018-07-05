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
      <div style="margin:auto;width:280px;text-align:center;line-height:2">
        <h6>对话框配置</h6>
        <p style="text-align: center"><button @click="showDialog" style="cursor:pointer">打开对话框</button></p> 
        <button @click="showAlign($event,'top left')">top left</button><br>
        <button @click="showAlign($event,'top')">top</button><br>
        <button @click="showAlign($event,'top right')">top right</button><br>
        <button @click="showAlign($event,'right top')">right top</button><br>
        <button @click="showAlign($event,'right')">right</button><br>
        <button @click="showAlign($event,'right bottom')">right bottom</button><br>
        <button @click="showAlign($event,'bottom right')">bottom right</button><br>
        <button @click="showAlign($event,'bottom')">bottom</button><br>
        <button @click="showAlign($event,'bottom left')">bottom left</button><br>
        <button @click="showAlign($event,'left top')">left top</button><br>
        <button @click="showAlign($event,'left')">left</button><br>
        <button @click="showAlign($event,'left bottom')">left bottom</button><br>        
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
        id: 'sss',
        align: 'right top',
        closeIcon: false,
        skin: 'blue',
        fixed: true,
        quickClose: true,
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
        onClose() {},
        onBeforeDestroy() {},
        onDestroy() {}
      }).show()
    },
    showAlign(event, pos) {
      const _this = this;      
      const anchor = event.target || event.srcElement
      _this.$dialog({
        align: pos,
        content: {
          template: '<div style="text-align:center">局势</div>'
        }
      }).show(anchor)
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