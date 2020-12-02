import {
  FORM_CONTROL
} from '@alicloud/console-base-styled-mixin';

import {
  EButtonSize
} from '../const';

const {
  PADDING,
  HEIGHT
} = FORM_CONTROL;

/**
 * 根据 size 计算 [padding-left|right, height, line-height]
 */
export default function getSizes(value: EButtonSize): [number, number, number] | null {
  switch (value) {
    case EButtonSize.XS:
      return [PADDING.XS, HEIGHT.XS, HEIGHT.XS - 2];
    case EButtonSize.S:
      return [PADDING.S, HEIGHT.S, HEIGHT.S - 2];
    case EButtonSize.M:
      return [PADDING.M, HEIGHT.M, HEIGHT.M - 2];
    case EButtonSize.L:
      return [PADDING.L, HEIGHT.L, HEIGHT.L - 2];
    case EButtonSize.XL:
      return [PADDING.XL, HEIGHT.XL, HEIGHT.XL - 2];
    default: // 默认无大小设置
      return null;
  }
}
