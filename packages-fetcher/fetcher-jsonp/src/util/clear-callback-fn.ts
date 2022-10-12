/**
 * 清除全局的方法
 */
export default function clearCallbackFn(callbackName: string): void {
  const win = window as unknown as Record<string, unknown>;
  
  try { // IE8 throws exception when try to delete a property on window http://stackoverflow.com/a/1824228/751089
    delete win[callbackName];
  } catch (err) {
    win[callbackName] = undefined;
  }
}
