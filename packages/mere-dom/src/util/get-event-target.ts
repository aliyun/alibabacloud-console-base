/**
 * 获取事件期望的 target 元素（当前节点或其祖先节点）
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/target 事件发生的元素
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget 绑定事件的元素
 * 
 * 在全局事件绑定的时候，以上 target 和 currentTarget 往往不能表示我们关心的事件发生的元素，比如 `a > span` 这样的结构，点击的是 span，但我们更关心的是 a，
 * 我们希望得到 a 作为 target，这就可以用这个方法了
 */
export default function getEventTarget<T extends HTMLElement= HTMLElement>(e: Event, check: (el: HTMLElement) => boolean | undefined | null | void): T | null {
  let anchor: HTMLElement | null = e.target as HTMLElement | null;
  
  while (anchor && !check(anchor)) {
    anchor = anchor.parentElement;
  }
  
  return anchor as T;
}
