# vue-app

> vue-dialog 对话框插件

## 使用方法

``` bash
# 引入
import vue-dialog from 'vue-dialog'

# 配置项
title: {
    type: String
    default：'标题'
}
skin: {
    type: String
    default：''
}
width: {
    type: String
    default：'auto'
}
height: {
    type: String
    default：'auto'
}
button: {
    type: Object,
    default: {
        confirm: {
            id: 'confirm',
            value: '确定',
            callback() {}
        },
        cancel: {
            id: 'cancel',
            value: '取消',
            callback() {}
        }
    }
}
onshow: {
    type: Function,
    default: function() {}
}
onclose: {
    type: Function,
    default: function() {}
}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
