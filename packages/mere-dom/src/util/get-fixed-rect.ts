import {
  TSelector,
  TParent
} from '../types';

import find from './find';

interface IResult {
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * getBoundingClientRect 给出的 x/left、y/top 永远是相对于视窗原点的，如果我们需要拿到相对于文档原点的数据，需要加上 scrollTop/Left
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */
export default function getFixedRect(selector: TSelector, parent?: TParent): IResult | null {
  const [el] = find(selector, parent);
  
  if (!el) {
    return null;
  }
  
  const {
    x,
    y,
    top,
    left,
    width,
    height
  } = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
  
  return {
    top: (y || top) + scrollTop,
    left: (x || left) + scrollLeft,
    width,
    height
  };
}
