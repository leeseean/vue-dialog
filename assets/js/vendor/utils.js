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