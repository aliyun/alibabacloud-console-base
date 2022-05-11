/**
 * 是否表单输入元素
 */
export default function isInputControl(el: HTMLElement): boolean {
  return ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
}