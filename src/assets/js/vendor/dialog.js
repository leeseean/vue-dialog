import VueDialog from '../../../components/vue-dialog'

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
          $vm.title = config.title          
          $vm.skin = config.skin          
          $vm.isMask = config.isMask          
          $vm.width = config.width || 'auto'         
          $vm.height = config.height || 'auto'                 
          $vm.zIndex = config.zIndex || '1024'                           
          $vm.content = config.content
          $vm.button = config.button
          $vm.onShow = config.onShow
          $vm.onClose = config.onClose          
          document.body.appendChild($vm.$el)
        },
        close() {
          $vm.isDialog = false
        },
        remove() {
            $vm.$destroy();
        }
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
