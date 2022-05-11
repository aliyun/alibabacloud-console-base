/**
 * 选中 element 里的文本
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
 * 
 * @throws
 */
export default function selectText(el: HTMLElement): void {
  const selection = window.getSelection();
  
  if (!selection) {
    return;
  }
  
  const range = document.createRange();
  
  range.selectNodeContents(el);
  selection.removeAllRanges();
  selection.addRange(range);
}
