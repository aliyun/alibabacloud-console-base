export default function wrap(el: Element, wrapper: Element): void {
  if (!el.parentNode) {
    return;
  }
  
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
