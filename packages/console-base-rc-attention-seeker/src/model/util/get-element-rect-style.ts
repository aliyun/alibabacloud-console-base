import {
  getFixedRect
} from '@alicloud/mere-dom';

import {
  IRect,
  IRectStyleRadius,
  IRectStyle
} from '../types';

function computeRect(el: HTMLElement): IRect {
  const rect = getFixedRect(el);
  
  return rect || {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  };
}

// 必须分开，合起来的没有值
function computedBorderRadius(el: HTMLElement): IRectStyleRadius {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 支持性良好
  if (window.getComputedStyle) {
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = window.getComputedStyle(el);
  
    return {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    };
  }
  
  return {
    borderTopLeftRadius: '',
    borderTopRightRadius: '',
    borderBottomLeftRadius: '',
    borderBottomRightRadius: ''
  };
}

export default function getElementRectStyle(el: HTMLElement): IRectStyle {
  return {
    ...computeRect(el),
    ...computedBorderRadius(el)
  };
}
