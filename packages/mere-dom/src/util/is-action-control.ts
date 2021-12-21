/**
 * 是否操作元素（按钮、链接）- 其实 input type="button|submit|reset" 也算，但不推荐那么玩，是按钮就应该是 button
 */
export default function isActionControl(el: HTMLElement): boolean {
  return ['A', 'BUTTON'].includes(el.tagName);
}