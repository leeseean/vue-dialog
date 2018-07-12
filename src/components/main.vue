<template>
  <div class="wrapper" id="wrapper">
    <div class="aside">
      <h4>导航</h4>
      <ol>
        <li>
          <p @click="showReturnObjNav = !showReturnObjNav">returnObj</p>
          <ul v-show="showReturnObjNav">
            <li>
              <a href="#method-show">show([anchor])</a>
            </li>
            <li>
              <a href="#method-close">close()</a>
            </li>
            <li>
              <a href="#method-destroy">destroy()</a>
            </li>
            <li>
              <a href="#method-content">content(options)</a>
            </li>
            <li>
              <a href="#method-title">title(text)</a>
            </li>
            <li>
              <a href="#method-width">width(value)</a>
            </li>
            <li>
              <a href="#method-height">height(value)</a>
            </li>
            <li>
              <a href="#method-button">button(array)</a>
            </li>
            <li>
              <a href="#prop-$vm">$vm</a>
            </li>
            <li>
              <a href="#prop-open">open</a>
            </li>
          </ul>
        </li>
        <li>
          <p @click="showConfigNav = !showConfigNav">config配置项</p>
          <ul v-show="showConfigNav">
            <li>
              <a href="#config-id">id</a>
            </li>
            <li>
              <a href="#config-closeIcon">closeIcon</a>
            </li>
            <li>
              <a href="#config-isMask">isMask</a>
            </li>
            <li>
              <a href="#config-fixed">fixed</a>
            </li>
            <li>
              <a href="#config-quickClose">quickClose</a>
            </li>
            <li>
              <a href="#config-align">align</a>
            </li>
            <li>
              <a href="#config-skin">skin</a>
            </li>
            <li>
              <a href="#config-width">width</a>
            </li>
            <li>
              <a href="#config-height">height</a>
            </li>
            <li>
              <a href="#config-zIndex">zIndex</a>
            </li>
            <li>
              <a href="#config-title">title</a>
            </li>
            <li>
              <a href="#config-content">content</a>
            </li>
            <li>
              <a href="#config-statusbar">statusbar</a>
            </li>
            <li>
              <a href="#config-button">button</a>
            </li>
            <li>
              <a href="#config-onShow">onShow</a>
            </li>
            <li>
              <a href="#config-onClose">onClose</a>
            </li>
            <li>
              <a href="#config-onBeforeDestroy">onBeforeDestroy</a>
            </li>
            <li>
              <a href="#config-onDestroy">onDestroy</a>
            </li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="content">
      <h2>引入art-dialog-vue</h2>
      <hr>
      <p>1.安装</p>
      <pre>
          <code>
              npm install art-dialog-vue //插件文件在plugin目录下
          </code>
      </pre>
      <p>2.直接引入</p>
      <pre>
          <code>
              &lt;script src="plugin/dist/static/css/dialog.min.css"&gt;&lt;/script&gt;
              &lt;script src="plugin/dist/static/js/dialog.js"&gt;&lt;/script&gt;
              &lt;script&gt;
                Vue.use(Dialog.default)//使用插件,注意以url引入时use的参数是Dialog.default
              &lt;/script&gt;
          </code>
      </pre>
      <p>3.模块化引入</p>
      <pre>
          <code>
              import Dialog from 'art-dialog-vue' //esm
              const Dialog = require('art-dialog-vue').default //RequireJS，非esm形式要加.default
              Vue.use(Dialog)//使用插件
          </code>
      </pre>
      <h2>基本用法</h2>
      <hr>
      <pre>
          <code>
              const returnObj = Vue.dialog(config);
              returnObj.show([anchor]);
          </code>
      </pre>
      <p>下面会就返回对象returnObj和config对象进行分别说明</p>
      <h2>returnObj</h2>
      <hr>
      <p>returnObj是vue调用dialog方法后返回的对象，共有8个方法(show,close,destroy,content...等)和2个属性($vm,open)</p>
      <h3 id="method-show">show([anchor])</h3>
      <p>弹出对话框，默认弹出在屏幕中央；anchor为dom元素，传入dom时对话框将根据设置的align值吸附在dom元素附近</p>
      <p>例子：</p>
      <pre>
                    <code>
                        const returnObj = Vue.dialog({
                            title: 'art-dialog-vue',
                            content: {
                                template: '&lt;div&gt;欢迎使用&lt;/div&gt;'
                            }
                        });
                        returnObj.show();
                        //传入anchor情况
                        const returnObj = Vue.dialog({
                            title: 'art-dialog-vue',
                            content: {
                                template: '&lt;div&gt;欢迎使用&lt;/div&gt;'
                            },
                            closeIcon: false,
                            align: 'top'
                        });
                        returnObj.show(document.querySeletor('#example-anchor'));
                    </code>
                </pre>
      <h3 id="method-close">close()</h3>
      <p>关闭对话框，并将对话框dom移除</p>
      <p>例子：</p>
      <pre>
                    <code>
                        const returnObj = Vue.dialog({
                            title: 'art-dialog-vue',
                            content: {
                                template: '&lt;div&gt;欢迎使用&lt;/div&gt;'
                            },
                            onShow() {
                                setTimeout(() => {
                                    returnObj.close();//2秒后关闭
                                }, 2000);
                            }
                        });
                        returnObj.show();
                    </code>
                </pre>
      <h3 id="method-destroy">destroy()</h3>
      <p>触发弹窗vue实例的$destroy()方法</p>
      <p>例子：</p>
      <pre>
                    <code>
                        const returnObj = Vue.dialog({
                            title: 'art-dialog-vue',
                            content: {
                                template: '&lt;div&gt;欢迎使用&lt;/div&gt;'
                            },
                            onShow() {
                                setTimeout(() => {
                                    returnObj.close().destroy();//2秒后关闭并销毁弹窗vue实例
                                }, 2000);
                            }
                        });
                        returnObj.show();
                    </code>
                </pre>
      <h3 id="method-content">content(options)</h3>
      <p>写入对话框内容,options配置项是vue组件配置</p>
      <p>例子：</p>
      <pre>
                    <code>
                        returnObj.content({
                            template: '&lt;div&gt;{{text}}&lt;/div&gt;',
                            data() {
                                return {
                                    text: '欢迎使用art-dialog-vue插件'
                                }
                            }
                        });
                    </code>
                </pre>
      <h3 id="method-title">title(text)</h3>
      <p>修改对话框标题</p>
      <h3 id="method-width">width(value)</h3>
      <p>修改对话框宽度</p>
      <h3 id="method-height">height(value)</h3>
      <p>修改对话框高度</p>
      <h3 id="method-button">button(array)</h3>
      <p>修改对话框按钮</p>
      <h3 id="prop-$vm">$vm</h3>
      <p>属性，获取当前弹窗vue实例</p>
      <h3 id="prop-open">open</h3>
      <p>属性（Boolean），判断对话框是否打开</p>
      <p>例子：</p>
      <pre>
                    <code>
                        const returnObj = Vue.dialog({
                            title: 'art-dialog-vue',
                            content: {
                                template: '&lt;div&gt;欢迎使用&lt;/div&gt;'
                            }
                        });
                        returnObj.show();
                        if (returnObj.open) {
                            //判断是否打开，do something...
                        }
                    </code>
                </pre>
      <h2>config配置项</h2>
      <hr>
      <p>注：config配置里面的所有方法（onShow,onclose,button中的callback等）中的this指向returnObj</p>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>类型</td>
            <td>说明</td>
          </tr>
        </thead>
        <tbody>
          <tr id="config-id">
            <td>id</td>
            <td>String, Number</td>
            <td>弹窗id，将会在弹窗根元素上生成dialog-id="id"的属性</td>
          </tr>
          <tr id="config-closeIcon">
            <td>closeIcon</td>
            <td>Boolean</td>
            <td>默认为true，右上角关闭按钮，true的时候表示有，false的时候不出现</td>
          </tr>
          <tr id="config-isMask">
            <td>isMask</td>
            <td>String, Boolean</td>
            <td>默认为false,是否遮罩，true的时候是，false的时候遮罩不出现</td>
          </tr>
          <tr id="config-fixed">
            <td>fixed</td>
            <td>Boolean</td>
            <td>默认为true，为true表示弹窗以position:fixed定位，false则为absolute定位</td>
          </tr>
          <tr id="config-quickClose">
            <td>quickClose</td>
            <td>Boolean</td>
            <td>默认为false，为true时点击非弹窗区域弹窗关闭</td>
          </tr>
          <tr id="config-skin">
            <td>skin</td>
            <td>String</td>
            <td>额外为弹窗增加的class，可根据skin自定义样式</td>
          </tr>
          <tr id="config-align">
            <td>align</td>
            <td>String</td>
            <td class="left">默认值为'top left'，弹窗吸附在anchor元素周围的位置，共十二个位置"top left","top","top right","right top","right","right bottom","bottom
              right","bottom","bottom left","left bottom","left","left top"</td>
          </tr>
          <tr id="config-width">
            <td>width</td>
            <td>String, Number</td>
            <td>默认值为'auto',定义弹窗的宽度</td>
          </tr>
          <tr id="config-height">
            <td>height</td>
            <td>String, Number</td>
            <td>默认值为'auto',定义弹窗的高度</td>
          </tr>
          <tr id="config-zIndex">
            <td>zIndex</td>
            <td>String, Number</td>
            <td>默认值为1024，定义弹窗的z-index值</td>
          </tr>
          <tr id="config-title">
            <td>title</td>
            <td>String, Number</td>
            <td>定义弹窗的标题</td>
          </tr>
          <tr id="config-content">
            <td>content</td>
            <td>Object</td>
            <td>
              <div>
                <pre>
                            <p>定义弹窗的内容，配置项为vue组件配置项，示例</p>
                            <code>
                                content: {
                                    template: '&lt;div&gt;{{color}}&lt;/div&gt;',
                                    data() {
                                        color: 'red'
                                    }
                                }
                            </code>
                            <p>要获取content中data的数据可以使用returnObj.$vm.content.color（returnObj.$vm为弹窗实例）</p>
                        </pre>
              </div>
            </td>
          </tr>
          <tr id="config-statusbar">
            <td>statusbar</td>
            <td>Object</td>
            <td>
              <div>
                <pre>
                            <p>定义状态栏区域的内容，配置项为vue组件配置项，示例</p>
                            <code>
                                statusbar: {
                                    template: '&lt;label&gt;&lt;input type="checkbox" v-model="checked"&gt;不再提醒&lt;/label&gt;',
                                    data() {
                                        checked: false
                                    }
                                }
                            </code>
                            <p>要获取statusbar中data的数据可以使用returnObj.$vm.statusbar.checked（returnObj.$vm为弹窗实例）</p>
                        </pre>
              </div>
            </td>
          </tr>
          <tr id="config-button">
            <td>button</td>
            <td>Array</td>
            <td>
              <div>
                <pre>
                            <p>每个item为一个对象，含id,value,callback三个配置项,示例</p>
                            <code>
                                    button: [
                                        {
                                            id: '1',
                                            value: '确定',
                                            callcack() {
                                                //点击后的回调 
                                                //注：this指向returnObj，
                                                return false;//返回false 表示弹窗不关闭
                                            }
                                        }
                                    ]
                            </code>
                        </pre>
              </div>
            </td>
          </tr>
          <tr id="config-onShow">
            <td>onShow</td>
            <td>Function</td>
            <td>弹窗打开(执行returnObj.show())后的回调，回调中this指向returnObj</td>
          </tr>
          <tr id="config-onClose">
            <td>onClose</td>
            <td>Function</td>
            <td>弹窗打开(执行returnObj.close())后的回调，回调中this指向returnObj</td>
          </tr>
          <tr id="config-onBeforeDestroy">
            <td>onBeforeDestroy</td>
            <td>Function</td>
            <td>弹窗实例钩子函数beforeDestroy中的回调，回调中this指向returnObj</td>
          </tr>
          <tr id="config-onDestroy">
            <td>onDestroy</td>
            <td>Function</td>
            <td>弹窗实例钩子函数destroyed中的回调，回调中this指向returnObj</td>
          </tr>
        </tbody>
      </table>
    </div>
    <a class="to-top-wrapper" href="#wrapper" v-if="toTopFlag">回顶部</a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showConfigNav: true,
        showReturnObjNav: true,
        text: '{{text}}',
        color: '{{color}}',
        toTopFlag: false
      }
    },
    methods: {
      showToTop() {
        window.addEventListener('scroll', () => {
          if (document.documentElement.scrollTop > 400) {
            this.toTopFlag = true
          } else {
            this.toTopFlag = false
          }
        })
      }
    },
    mounted() {
      this.showToTop()
    }
  }

</script>
