<template>
  <div>
    <div class="mask" v-if="isMask"></div>
    <div class="wrapper" :style="{width: width, height: height}">
      <div class="close">x</div>
      <div class="title" v-if="title">{{title}}</div>
      <slot></slot>
      <div class="buttons">
        <div class="button-confirm" :button-id="id" @click="comfirm.callback">{{comfirm.value}}</div>
        <div class="button-cancel" :button-id="id" @click="cancel.callback">{{cancel.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog',
    props: {
      isMask: { //是否显示遮罩层
        type: Boolean,
        default: true
      },
      width: [String, Number],
      height: [String, Number],
      title: [String, Number],
      comfirm: {
        type: Object,
        default: {
          id: '',
          value: '确定',
          callback() {}
        }
      },
      cancel: {
        type: Object,
        default: {
          id: '',
          value: '取消',
          callback() {}
        }
      },
      show: {
        type: Function,
        default () {}
      },
      close: {
        type: Function,
        default () {}
      }
    },
    data() {
      return {};
    },
    mounted() {
      this.show();
    },
    destroyed() {
      this.close();
    }
  }

</script>

<style scoped>
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }

  .wrapper {
    position: absolute;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
  }

</style>
