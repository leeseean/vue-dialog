export function noop() {}

export function setStyle(dom, obj) {
  for (let i in obj) {
    dom.style[i] = obj[i];
  }
}

//计算元素到body的距离
export function offsetDis(element) {
  let l = 0,
      t = 0;
  while (element) {
      l = l + element.offsetLeft + element.clientLeft;
      t = t + element.offsetTop + element.clientTop;
      element = element.offsetParent;
  }
  return {
      left: l,
      top: t
  };
}

// 获取浏览器窗口的可视区域的宽度
export function getViewPortWidth() {
  return document.documentElement.clientWidth || document.body.clientWidth;
}

// 获取浏览器窗口的可视区域的高度
export function getViewPortHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

// 获取浏览器窗口水平滚动条的位置
export function getScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}

// 获取浏览器窗口垂直滚动条的位置
export function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}