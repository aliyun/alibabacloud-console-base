/**
 * 选中 element 里的文本
 * 
 * @throws
 */
export default function selectText(el: Element): void {
  const selection = window.getSelection();
  const range = document.createRange();
  
  range.selectNodeContents(el);
  selection.removeAllRanges();
  selection.addRange(range);
}

