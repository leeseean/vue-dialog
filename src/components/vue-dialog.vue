<template>
  <div v-if="isDialog" class="dialog-outter-wrapper" :style="{'z-index': zIndex}" :dialog-id="id">
    <div class="dialog-mask" v-if="isMask"></div>
    <div class="dialog-wrapper" :class="{skin: skin}" :style="{width, height, position: fixed ? 'fixed' : 'absolute'}" ref="dialogWrapper">
      <div class="dialog-close" v-if="closeIcon" @click="closeCb">x</div>
      <div class="dialog-title" v-if="title">{{title}}</div>
      <div class="dialog-content" ref="content"></div>
      <div class="clearfix dialog-footer">
        <div class="fl dialog-statusbar" v-if="statusbar" ref="statusbar"></div>
        <div class="fr dialog-buttons" v-if="button.length>0">
          <div v-for="(item,index) in button" :key="index" :button-id="item.id" @click="clickCb(item.callback)" class="dialog-button">{{item.value}}</div>
        </div>
      </div>
      <div class="dialog-anchor-arrow" :align="align"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-dialog',
    props: {
      id: [String, Number],
      closeIcon: Boolean,
      isDialog: [String, Boolean], //是否显示对话框
      isMask: [String, Boolean], //是否显示遮罩层
      fixed: Boolean,
      quickClose: Boolean,
      align: String,
      skin: String,
      width: [String, Number],
      height: [String, Number],
      zIndex: [String, Number],
      title: [String, Number],
      content: Object,
      statusbar: Object,
      button: Array,
      onShow: Function,
      onClose: Function,
      onBeforeDestroy: Function,
      onDestroy: Function
    },
    watch: {
      'isDialog': {
        handler(newVal, oldVal) {
          if (newVal) {
            document.body.addEventListener('click', this.quickCloseCb)
          } else {
            document.body.removeEventListener('click', this.quickCloseCb)
          }
        },
        immediate: false
      },
    },
    methods: {
      closeCb() {
        this.isDialog = false
      },
      clickCb(cb = () => {}) {
        const flag = cb.call(this) //按钮回调函数返回 false 则不许关闭
        if (flag === false) {
          return
        }
        this.isDialog = false
      },
      quickCloseCb(event) {
        const _this = this;
        const targetObj = event.target || event.srcElement
        const dialogWrapper = _this.$refs.dialogWrapper
        if (targetObj !== dialogWrapper && !dialogWrapper.contains(targetObj) && _this.quickClose) {
          _this.isDialog = false
        }
      }
    },
    mounted() {

    }
  }

</script>

<style>
  @import '../../asserts/css/reset.css';
  .dialog-outter-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    pointer-events: none;
  }

  .dialog-mask {
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

  .dialog-wrapper {
    min-width: 120px;
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

  .dialog-close {
    position: absolute;
    right: 6px;
    top: 6px;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    padding: 0 4px;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
  }

  .dialog-close:hover {
    opacity: .5;
  }

  .dialog-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    cursor: default;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 12px 0 16px 0;
  }

  .dialog-content {
    padding: 25px 20px 25px 20px;
  }

  .dialog-buttons {
    font-size: 0;
    padding-bottom: 12px;
    text-align: center;
  }

  .dialog-statusbar {
    text-align: center;
    padding: 6px 12px;
    white-space: nowrap;
  }

  .dialog-statusbar input {
    vertical-align: middle;
  }

  .dialog-button {
    display: inline-block;
    text-align: center;
    padding: 6px 12px;
    white-space: nowrap;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
    margin-left: 10px;
  }

  .dialog-button:last-child {
    margin-right: 10px;
  }

  .dialog-button:hover {
    background-color: #3276b1;
    border-color: #285e8e;
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

  .dialog-anchor-arrow {
    position: absolute;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border: 1px solid #999;
    background-color: #fff;
    box-sizing: border-box;
  }

  .dialog-anchor-arrow[align="top left"] {
    left: 15px;
    bottom: -8px;
    transform: rotate(45deg);
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="top right"] {
    right: 15px;
    bottom: -8px;
    transform: rotate(45deg);
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="top"] {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    bottom: -8px;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="right top"] {
    top: 15px;
    left: -8px;
    transform: rotate(45deg);
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="right"] {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    left: -8px;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="right bottom"] {
    bottom: 15px;
    left: -8px;
    transform: rotate(45deg);
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="bottom left"] {
    left: 15px;
    top: -8px;
    transform: rotate(45deg);
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="bottom right"] {
    right: 15px;
    top: -8px;
    transform: rotate(45deg);
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="bottom"] {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    top: -8px;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="left top"] {
    top: 15px;
    right: -8px;
    transform: rotate(45deg);
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="left"] {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    right: -8px;
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .dialog-anchor-arrow[align="left bottom"] {
    bottom: 15px;
    right: -8px;
    transform: rotate(45deg);
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

</style>
