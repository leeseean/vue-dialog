#
vue - dialog

  >
  vue - dialog 对话框插件

## 使用方法
# 引入
import VueDialog from './vue-dialog'

# 配置项
      isDialog: { //是否显示对话框
        type: Boolean,
        default: true
      },
      isMask: { //是否显示遮罩层
        type: Boolean,
        default: true
      },
      isConfirmBtn: { //是否显示确认按钮
        type: Boolean,
        default: true
      },
      isCancelBtn: { //是否显示取消按钮
        type: Boolean,
        default: true
      },
      skin: String,
      dialogWidth: [String],
      dialogHeight: [String],
      title: [String, Number],//不设置标题的时候不显示标题
      confirmBtnId: [String, Number],
      confirmBtnValue: [String, Number],
      cancelBtnId: [String, Number],
      cancelBtnValue: [String, Number],
      事件：
      弹窗出现事件，在组件上用 @show 接收
      弹窗关闭事件，在组件上用 @cancel 接收
      弹窗确认按钮事件，在组件上用 @confirm 接收      
`
For a detailed explanation on how things work, check out the[guide](http: //vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
