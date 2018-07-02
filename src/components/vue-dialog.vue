<template>
  <div v-if="isDialog" class="dialog-wrpper" :style="{'z-index': zIndex}">
    <div class="mask" v-if="isMask"></div>
    <div class="wrapper" :class="{skin: skin}" :style="{width, height}">
      <div class="close" @click="closeCb">x</div>
      <div class="title" v-if="title">{{title}}</div>
      <div class="content" v-html="content"></div>
      <div class="buttons" v-if="button.length>0">
        <div v-for="(item,index) in button" :key="index" :button-id="item.id" @click="clickCb(item.callback)" class="button-dialog">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-dialog',
    props: {
      isDialog: [String, Boolean], //是否显示对话框
      isMask: [String, Boolean], //是否显示遮罩层
      skin: String,
      width: [String, Number],
      height: [String, Number],
      zIndex: [String, Number],
      title: [String, Number],
      content: String,
      button: Array,
      onShow: Function,
      onClose: Function,
      
    },
    watch: {
      'isDialog': {
        handler(newVal, oldVal) {
          if (newVal) {
            this.onShow()
          } else {
            this.onClose()
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
      }
    }
  }

</script>

<style scoped>
  .dialog-wrpper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
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

  .close {
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
    padding: 25px 20px 25px 20px;
  }

  .buttons {
    font-size: 0;
    padding-bottom: 12px;
    text-align: center;
  }

  .button-dialog {
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

  .button-dialog:last-child {
    margin-right: 10px;
  }

  .button-dialog:hover {
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

</style>
