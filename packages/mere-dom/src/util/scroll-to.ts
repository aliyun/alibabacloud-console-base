import find from './find';

function getContainer(selector: string | HTMLElement | Window | null): Window | HTMLElement | null {
  if (selector === window) {
    return window;
  }
  
  const [el] = find<HTMLElement>(selector as string | HTMLElement | null);
  
  return el || null;
}

function fallbackForDom(dom: HTMLElement, top?: number, left?: number): void {
  if (top >= 0) {
    dom.scrollTop = top;
  }
  
  if (left >= 0) {
    dom.scrollLeft = left;
  }
}

export default function scrollTo(selector: string | HTMLElement | Window | null, options: ScrollToOptions): void {
  if (!options) {
    return;
  }
  
  const container = getContainer(selector);
  
  if (!container) {
    return;
  }
  
  /*
   * Window 和 Element 都有 scrollTo，见
   * - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
   * - https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo - IE 不支持
   */
  try {
    container.scrollTo({
      behavior: 'smooth',
      ...options
    });
  } catch (ex) {
    fallbackForDom(container === window ? document.documentElement : container as HTMLElement, options.top, options.left);
  }
}
