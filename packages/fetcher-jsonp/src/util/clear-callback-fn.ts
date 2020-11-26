/**
 * 清除全局的方法
 */
export default function clearCallbackFn(callbackName: string): void {
  try { // IE8 throws exception when try to delete a property on window http://stackoverflow.com/a/1824228/751089
    delete window[callbackName];
  } catch (e) {
    window[callbackName] = undefined;
  }
}
