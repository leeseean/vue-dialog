import VueDialog from '../../../src/components/vue-dialog'
import {
  noop,
  setStyle,
  offsetDis,
  getViewPortHeight,
  getScrollTop
} from './utils'

let $vm

export default {
  install(Vue, options) {
    const dialog = (config) => {
      const DialogPlugin = Vue.extend(VueDialog)
      $vm = new DialogPlugin().$mount()
      $vm.isDialog = false
      return {
        show(anchor) {
          $vm.id = config.id || ''
          $vm.closeIcon = config.closeIcon === false ? false : true
          $vm.title = config.title || ''
          $vm.skin = config.skin || ''
          $vm.fixed = config.fixed || false
          $vm.align = config.align || 'top left'
          $vm.quickClose = config.quickClose || false
          $vm.isMask = config.isMask || false
          $vm.width = config.width || 'auto'
          $vm.height = config.height || 'auto'
          $vm.zIndex = config.zIndex || '1024'
          $vm.button = (config.button || []).map(item => {
            if (item.callback) {
              item.callback = item.callback.bind(this) 
            }
            return item
          })
          $vm.onShow = (config.onShow || noop).bind(this)
          $vm.onClose = (config.onClose || noop).bind(this)
          $vm.onBeforeDestroy = (config.onBeforeDestroy || noop).bind(this)
          $vm.onDestroy = (config.onDestroy || noop).bind(this)
          document.body.appendChild($vm.$el)
          if ($vm.fixed) {
            setStyle($vm.$refs.dialogWrapper, {
              top: '50%',
            })
          } else {
            setStyle($vm.$refs.dialogWrapper, {
              top: `${getScrollTop() + getViewPortHeight() / 2}px`,
            })
          }
          $vm.isDialog = true
          const Content = Vue.extend(config.content || {
            template: '<div></div>'
          })
          $vm.content = new Content().$mount()
          if (config.statusbar) {
            const Statusbar = Vue.extend(config.statusbar)
            $vm.statusbar = new Statusbar().$mount()
          }
          $vm.$nextTick(() => {
            $vm.$refs.content.appendChild($vm.content.$el)
            $vm.statusbar && $vm.$refs.statusbar.appendChild($vm.statusbar.$el)
            if (anchor) { //定位到锚点元素
              $vm.fixed = false
              const anchorLeft = offsetDis(anchor).left
              const anchorTop = offsetDis(anchor).top
              const anchorWidth = anchor.offsetWidth
              const anchorHeight = anchor.offsetHeight
              const dialogWidth = $vm.$refs.dialogWrapper.offsetWidth
              const dialogHeight = $vm.$refs.dialogWrapper.offsetHeight
              const alignObj = {
                "top left": `translateX(${anchorLeft}px) translateY(${anchorTop-dialogHeight-10}px)`,
                "top": `translateX(${anchorLeft+(anchorWidth-dialogWidth)/2}px) translateY(${anchorTop-dialogHeight-10}px)`,
                "top right": `translateX(${anchorLeft+anchorWidth-dialogWidth}px) translateY(${anchorTop-dialogHeight-10}px)`,
                "right top": `translateX(${anchorLeft+anchorWidth+10}px) translateY(${anchorTop}px)`,
                "right": `translateX(${anchorLeft+anchorWidth+10}px) translateY(${anchorTop+(anchorHeight-dialogHeight)/2}px)`,
                "right bottom": `translateX(${anchorLeft+anchorWidth+10}px) translateY(${anchorTop+anchorHeight-dialogHeight}px)`,
                "bottom right": `translateX(${anchorLeft+anchorWidth-dialogWidth}px) translateY(${anchorTop+anchorHeight+10}px)`,
                "bottom": `translateX(${anchorLeft+(anchorWidth-dialogWidth)/2}px) translateY(${anchorTop+anchorHeight+10}px)`,
                "bottom left": `translateX(${anchorLeft}px) translateY(${anchorTop+anchorHeight+10}px)`,
                "left bottom": `translateX(${anchorLeft-dialogWidth-10}px) translateY(${anchorTop+anchorHeight-dialogHeight}px)`,
                "left": `translateX(${anchorLeft-dialogWidth-10}px) translateY(${anchorTop+anchorHeight-dialogHeight}px)`,
                "left top": `translateX(${anchorLeft-dialogWidth-10}px) translateY(${anchorTop}px)`
              }
              setStyle($vm.$refs.dialogWrapper, {
                left: 0,
                top: 0,
                transform: `${alignObj[$vm.align]}`
              })
            }
            $vm.onShow()
          })
          return this
        },
        close() {
          $vm.isDialog = false
          $vm.onClose()
          return this
        },
        destroy() {
          $vm.$destroy()
          return this
        },
        title(text) {
          $vm.title = text
          return this
        },
        width(value) {
          $vm.width = value
          return this
        },
        height(value) {
          $vm.height = value
          return this
        },
        button(array) {
          $vm.button = array.map(item => {
            if (item.callback) {
              item.callback = item.callback.bind(this) 
            }
            return item
          })
          return this
        },
        content(contentObj) {
          const $oldEl = $vm.content.$el
          $vm.content.$destroy()
          const Content = Vue.extend(contentObj)
          $vm.content = new Content().$mount()
          $vm.$nextTick(() => {
            $vm.$refs.content.removeChild($oldEl)
            $vm.$refs.content.appendChild($vm.content.$el)
          })
          return this
        },
        $vm: $vm,
        open: $vm.isDialog
      }
    }
    if (!Vue.dialog) {
      Vue.dialog = dialog
    }
    // Vue.prototype.$dialog = Vue.$dialog
    Vue.mixin({
      created() {
        this.$dialog = Vue.dialog
      }
    })
  }
}
