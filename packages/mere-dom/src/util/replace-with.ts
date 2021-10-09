/**
 * 替换 element
 */
export default function replaceWith(oldEl: Element, newEl: Element): void {
  // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith - IE 不支持
  if (oldEl.replaceWith) {
    oldEl.replaceWith(newEl);
    
    return;
  }
  
  if (oldEl.parentElement) {
    oldEl.parentElement.insertBefore(oldEl, newEl);
    oldEl.parentElement.removeChild(oldEl);
  }
}
