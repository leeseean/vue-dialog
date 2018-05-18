<template>
  <div v-if="isDialog">
    <div class="mask" v-if="isMask"></div>
    <div class="wrapper" :class="{skin: skin}" :style="{width: dialogWidth, height: dialogHeight}">
      <div class="close" @click="cancel">x</div>
      <div class="title" v-if="title">{{title}}</div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="buttons" v-if="isConfirmBtn || isCancelBtn">
        <div v-if="isConfirmBtn" class="button-confirm" :button-id="confirmBtnId" @click="confirm">{{confirmBtnValue}}</div>
        <div v-if="isCancelBtn" class="button-cancel" :button-id="cancelBtnId" @click="cancel">{{cancelBtnValue}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-dialog',
    props: {
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
      title: [String, Number],
      confirmBtnId: [String, Number],
      confirmBtnValue: [String, Number],
      cancelBtnId: [String, Number],
      cancelBtnValue: [String, Number],
    },
    data() {
      return {};
    },
    mounted() {},
    methods: {
      show() {
        this.$emit('show', 'show')
      },
      confirm() {
        this.$emit('confirm', 'confirm')
      },
      cancel() {
        this.$emit('cancel', 'cancel')
      }
    },
    destroyed() {
      this.cancel();
    }
  }

</script>

<style scoped>

  .mask {
    opacity: 0.7;
    background: rgb(0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    z-index: -1;
  }

  .wrapper {
    position: absolute;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 6px;
    outline: 0;
    top: 50%;
    left: 50%;
    transition: all .15s ease-in-out;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1025;
    box-sizing: border-box;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 4px;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    color: #000;
    opacity: 0.2;
    text-shadow: 0 1px 0 #fff;
    font-size: 21px;
    font-weight: 700;
  }

  .close:hover {
    opacity: .5;
  }

  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    cursor: default;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 12px 0 16px 0;
  }

  .content {
    padding: 10px 20px;
  }

  .buttons {
    font-size: 0;
    padding-bottom: 12px;
    text-align: center;
  }

  .button-confirm,
  .button-cancel {
    display: inline-block;
    text-align: center;
    padding: 2px 12px;
    white-space: nowrap;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 10px;
  }

  .button-confirm {
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
  }

  .button-cancel {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }

  .button-cancel:hover {
    color: #333;
    background-color: #ebebeb;
    border-color: #adadad;
  }

  .button-confirm:hover {
    background-color: #3276b1;
    border-color: #285e8e;
  }

</style>
