import {
  TSelector,
  TParent
} from '../types';

/**
 * 类似 jquery 的 find，只是返回的是数组
 */
export default function find<E extends Element = HTMLElement>(selector: TSelector<E>, parent: TParent = document): E[] {
  const arr: E[] = [];
  
  if (!selector) {
    return arr;
  }
  
  if (typeof selector === 'string') {
    try {
      const elements = parent.querySelectorAll<E>(selector);
      
      for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i]!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
      }
    } catch (err) {
      // do nothing
    }
  } else { // selector as element
    arr.push(selector);
  }
  
  return arr;
}
