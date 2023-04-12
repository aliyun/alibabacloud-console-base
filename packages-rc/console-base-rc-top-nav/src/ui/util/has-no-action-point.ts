import {
  isFunction as _isFunction,
  some as _some
} from 'lodash-es';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

const REG_ON_XX = /^on[A-Z]/;

/**
 * buttonProps 是否「不」含有行动点（href 和 onXx）
 */
export default function hasNoActionPoint(buttonProps?: Partial<ButtonProps> | null): boolean {
  return !buttonProps?.href && !_some(buttonProps, (v, k) => REG_ON_XX.test(k) && _isFunction(v));
}
