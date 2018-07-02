import VueDialog from '../../../components/vue-dialog'

let $vm

export default {
  install(Vue, options) {
    if (!$vm) {
      const DialogPlugin = Vue.extend(VueDialog)
      $vm = new DialogPlugin({
        el: document.createElement('div')
      })
    }
    $vm.isDialog = false
    const dialog = (config) => {
      return {
        show() {
          $vm.isDialog = true
          $vm.title = config.title          
          $vm.content = config.content
          document.body.appendChild($vm.$el)
          config.onShow && config.onShow.call($vm)
        },
        hide() {
          $vm.isDialog = false
          config.onHide &&  config.onHide.call($vm)
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
