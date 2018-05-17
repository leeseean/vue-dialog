<template>
  <div class="dialog-wrap">
    <div class="dialog-mask" v-if="isMask"></div>

  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    isMask: {//是否显示遮罩层
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
}
</script>

<style>
  .dialog-mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }
</style>
