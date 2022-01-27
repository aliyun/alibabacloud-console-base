import {
  createTextarea
} from './util';

const COMMAND = 'copy';

// check document FOR SSR
export const COPY_SUPPORTED = typeof document !== 'undefined' && document.queryCommandSupported(COMMAND);

export default function copyText(text = ''): boolean {
  const lastActiveElement = document.activeElement;
  
  if (!COPY_SUPPORTED) {
    return false;
  }
  
  const textarea = createTextarea(text);
  let result: boolean;
  
  try {
    textarea.value = text;
    textarea.select();
    
    result = document.execCommand(COMMAND);
    
    /**
     * Safari （到目前最新的版本 15.2 都有）下兼容性问题：
     * 
     * 1. select 可以运行，但无法真正选中文字
     * 2. 因此 execCommand 返回 false
     * 
     * 解决的办法是用 setSelectionRange 重新选一次
     */
    if (!result) {
      textarea.setSelectionRange(0, text.length);
      
      result = document.execCommand(COMMAND);
    }
  } catch (err) {
    result = false;
  }
  
  textarea.parentNode?.removeChild(textarea);
  
  // 把夺取过来的焦点归还给 lastActiveElement，但不能确定其是否存在或可见，必须 try-catch
  try {
    if (lastActiveElement) {
      (lastActiveElement as HTMLElement).focus();
    }
  } catch (err2) {
    // ignore
  }
  
  return result;
}
