import {
  isValidElement
} from 'react';

import {
  DialogProps
} from '@alicloud/console-base-rc-dialog-core';

/**
 * 为了使用上的便利性，你可以仅传入内容（string 或 JSX.Element），这个方法是判断并返回 `{ content }` 对象
 */
function fromContentOrProps<R = void, D extends object = Record<string, unknown>>(contentOrProps?: string | JSX.Element | DialogProps<R, D>): DialogProps<R, D> {
  if (!contentOrProps) {
    return {};
  }
  
  if (typeof contentOrProps === 'string' || isValidElement(contentOrProps)) {
    return {
      content: contentOrProps
    };
  }
  
  return contentOrProps as DialogProps<R, D>; // isValidElement cannot guard
}

/**
 * promise dialog 需要的 props
 */
export default function buildPropsForPromise<R = void, D extends object = Record<string, unknown>>(
    contentOrProps?: string | JSX.Element | DialogProps<R, D>,
    fixedProps?: DialogProps<R, D>,
    defaultProps?: DialogProps<R, D>
): DialogProps<R, D> {
  const props = fromContentOrProps<R, D>(contentOrProps);
  
  return {
    prevFocus: document.activeElement,
    ...defaultProps, // 默认的 props 可以被传覆盖
    ...props,
    ...fixedProps // 固定的 props 不能被覆盖
  };
}
