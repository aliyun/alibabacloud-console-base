const COMMAND = 'copy';

/**
 * 传建一个临时的 textarea 用于执行复制命令
 */
function createTextarea(text: string): HTMLTextAreaElement {
  const textarea = document.createElement('textarea');
  
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.clip = 'rect(0, 0, 0, 0)';
  textarea.style.width = '0';
  textarea.style.height = '0';
  textarea.style.lineHeight = '0';
  textarea.style.opacity = '0';
  textarea.value = text;
  
  document.body.appendChild(textarea);
  
  return textarea;
}

export const COPY_SUPPORTED = document.queryCommandSupported(COMMAND);

export default function copyText(text = ''): boolean {
  if (!COPY_SUPPORTED) {
    return false;
  }
  
  const textarea = createTextarea(text);
  
  textarea.value = text;
  textarea.select();
  
  try {
    document.execCommand(COMMAND);
    
    return true;
  } catch (e) {
    return false;
  } finally {
    textarea.parentNode.removeChild(textarea);
  }
}
