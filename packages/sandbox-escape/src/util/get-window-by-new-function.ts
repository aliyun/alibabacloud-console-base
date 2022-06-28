export default function getWindowByNewFunction(): Window | null {
  /**
   * 需要 try-catch，因为可能会被 CSP 拦截，比如这段代码放在 Github 的项目页面就会报错如下：
   *
   * 「Content Security Policy: The page’s settings blocked the loading of a resource at eval (“script-src”).」
   */
  try {
    return new Function('', 'return window')() as Window; // eslint-disable-line no-new-func
  } catch (err) {
    return null;
  }
}