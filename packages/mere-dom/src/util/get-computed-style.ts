/**
 * window.getComputedStyle 支持性良好，但我们还是保守一点吧
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
 */
export default function getComputedStyle(el: HTMLElement): CSSStyleDeclaration {
  return window.getComputedStyle ? window.getComputedStyle(el) : el.style; // eslint-disable-line @typescript-eslint/no-unnecessary-condition
}