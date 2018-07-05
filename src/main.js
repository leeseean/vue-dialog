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
      <h1>art-dialog-vue</h1>
      <h3>文档与示例</h3>
      <p>artDialogVue —— 基于Vue.js框架的对话框插件</p>
      <ol>
        <li>支持普通与12方向气泡状对话框</li>
        <li>支持标准与模态对话框</li>
        <li>丰富且友好的编程接口</li>
        <li>能自适应内容尺寸</li>
      </ol>
      <h1>文档导航</h1>
      <hr/>
      <ul>
        <li>
          <a href="">引入artDialogVue</a>
        </li>
        <li>
          <a href="">快速参考</a>
          <ul>
            <li><a href="">普通对话框</a></li>
            <li><a href="">模态对话框</a></li>
            <li><a href="">气泡浮层</a></li>
            <li><a href="">添加按钮</a></li>
            <li><a href="">控制对话框关闭</a></li>
            <li><a href="">不显示关闭按钮</a></li>
          </ul>
        </li>
        <li>
          <a href="">方法</a>
          <ul>
            <li><a href="">show([anchor])</a></li>
            <li><a href="">close()</a></li>
            <li><a href="">remove()</a></li>
            <li><a href="">content(options)</a></li>
          </ul>
        </li>
        <li>
          <a href="">选项</a>
          <ul>
            <li>
              内容
              <ul>
                <li><a href="">title</a></li>
                <li><a href="">content</a></li>
                <li><a href="">statusbar</a></li>
              </ul>
            </li>
            <li>
              按钮
              <ul>
                <li><a href="">button</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
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
