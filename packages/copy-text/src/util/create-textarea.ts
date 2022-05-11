/**
 * 传建一个临时的 textarea 用于执行复制命令
 * 
 * 不可 display: none
 */
export default function createTextarea(text: string): HTMLTextAreaElement {
  const textarea = document.createElement('textarea');
  
  textarea.style.position = 'fixed';
  textarea.style.top = '-1000px';
  textarea.style.left = '-1000px';
  textarea.style.width = '100px';
  textarea.style.height = '20px';
  textarea.style.zIndex = '-1000';
  textarea.readOnly = true; // 防止手机端软键盘弹出
  textarea.value = text;
  
  document.body.appendChild(textarea);
  
  return textarea;
}