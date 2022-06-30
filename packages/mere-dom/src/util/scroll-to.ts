import find from './find';

function getContainer(selector: string | HTMLElement | Window | null): Window | HTMLElement | null {
  if (selector === window) {
    return window;
  }
  
  return find<HTMLElement>(selector as string | HTMLElement | null)[0] || null;
}

function fallbackForDom(dom: HTMLElement, top?: number, left?: number): void {
  if (typeof top === 'number' && top >= 0) {
    dom.scrollTop = top;
  }
  
  if (typeof left === 'number' && left >= 0) {
    dom.scrollLeft = left;
  }
}

export default function scrollTo(selector: string | HTMLElement | Window | null, options: ScrollToOptions): void {
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
  } catch (err) {
    fallbackForDom(container === window ? document.documentElement : container as HTMLElement, options.top, options.left);
  }
}
