import {
  TSelector
} from '../types';

import find from './find';

/**
 * 防止短时间内很多一起
 */
const doScroll = (() => {
  let scrolling = false;
  
  return (el: Element) => {
    if (scrolling) {
      return;
    }
    
    scrolling = true;
    
    setTimeout(() => {
      scrolling = false;
    }, 50);
    
    try { // 防止不支持的浏览器报错
      el.scrollIntoView({
        behavior: 'smooth'
      });
    } catch (e) {
      // ignore
    }
  };
})();

/**
 * 基本都支持
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
export default function scrollIntoView(selector: TSelector): void {
  const [el] = find(selector);
  
  if (!el) {
    return;
  }
  
  doScroll(el);
}
