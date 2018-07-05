import VueDialog from '../../../src/components/vue-dialog'

let $vm

export default {
  install(Vue, options) {
    if (!$vm) {
      const DialogPlugin = Vue.extend(VueDialog)
      $vm = new DialogPlugin().$mount()
    }
    $vm.isDialog = false
    const dialog = (config) => {
      return {
        show() {
          $vm.isDialog = true
          $vm.id = config.id       
          $vm.closeIcon = config.closeIcon === false ? false : true
          $vm.title = config.title
          $vm.skin = config.skin
          $vm.fixed = config.fixed    
          $vm.quickClose = config.quickClose      
          $vm.isMask = config.isMask
          $vm.width = config.width || 'auto'
          $vm.height = config.height || 'auto'
          $vm.zIndex = config.zIndex || '1024'
          $vm.button = config.button
          $vm.onShow = config.onShow || noop
          $vm.onClose = config.onClose || noop
          $vm.onBeforeRemove = config.onBeforeRemove || noop
          $vm.onRemove = config.onRemove || noop
          document.body.appendChild($vm.$el)
          const Content = Vue.extend(config.content)
          $vm.content = new Content().$mount()
          const Statusbar = Vue.extend(config.statusbar)
          $vm.statusbar = new Statusbar().$mount()
          $vm.$nextTick(() => {
            $vm.$refs.content.appendChild($vm.content.$el)
            $vm.$refs.statusbar.appendChild($vm.statusbar.$el)        
            $vm.onShow()
          })
          return this
        },
        close() {
          $vm.isDialog = false
          $vm.onClose()
          return this
        },
        remove() {
          $vm.onBeforeDestroy()          
          $vm.$destroy()
          $vm.onDestroy()
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
        open: $vm.isDialog
      }
    }
    if (!Vue.$dialog) {
      Vue.$dialog = dialog
    }
    // Vue.prototype.$dialog = Vue.$dialog
    Vue.mixin({
      created() {
        this.$dialog = Vue.$dialog
      }
    })
  }
}

function noop() {}