<template>
  <div>
    <div class="mask" v-if="isMask"></div>
    <div class="wrapper" :class="{skin: skin}" :style="{width: dialogWidth, height: dialogHeight}">
      <div class="close">x</div>
      <div class="title" v-if="title">{{title}}</div>
      <slot></slot>
      <div class="buttons">
        <div class="button-confirm" :button-id="confirmBtnId" @click="confirm">{{confirmBtnValue}}</div>
        <div class="button-cancel" :button-id="cancelBtnId" @click="cancel">{{cancelBtnValue}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-dialog',
    props: {
      isMask: { //是否显示遮罩层
        type: Boolean,
        default: true
      },
      skin: String,
      dialogWidth: [String, Number],
      dialogHeight: [String, Number],
      title: [String, Number],
      confirmBtnId: [String, Number],
      confirmBtnValue: [String, Number],
      cancelBtnId: [String, Number],
      cancelBtnValue: [String, Number],
    },
    data() {
      return {};
    },
    mounted() {
      this.show();
    },
    methods: {
      show() {
        this.$emit('show','show')
      },
      confirm() {
        this.$emit('confirm','confirm')        
      },
      cancel() {
        this.$emit('cancel','cancel')        
      }
    },
    destroyed() {
      this.cancel();
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
    background: dark;
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
