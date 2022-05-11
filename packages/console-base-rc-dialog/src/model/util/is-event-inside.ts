/**
 * 判断事件是否发生在 container 内
 */
export default function isEventInside(e: Event, container: HTMLElement): boolean {
  let el: HTMLElement | null = e.target as HTMLElement;
  
  while (el && el !== document.body) {
    if (el === container) {
      return true;
    }
    
    el = el.parentElement; // eslint-disable-line no-param-reassign
  }
  
  return false;
}