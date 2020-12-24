import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  EButtonSize
} from '../const';

/**
 * 根据 size 计算 [padding-left|right, height, line-height]
 */
export default function getSizes(value: EButtonSize): [number, number, number] | null {
  switch (value) {
    case EButtonSize.XS:
      return [SIZE.PADDING_X_FORM_CONTROL_XS, SIZE.HEIGHT_FORM_CONTROL_XS, SIZE.HEIGHT_FORM_CONTROL_XS - 2];
    case EButtonSize.S:
      return [SIZE.PADDING_X_FORM_CONTROL_S, SIZE.HEIGHT_FORM_CONTROL_S, SIZE.HEIGHT_FORM_CONTROL_S - 2];
    case EButtonSize.M:
      return [SIZE.PADDING_X_FORM_CONTROL_M, SIZE.HEIGHT_FORM_CONTROL_M, SIZE.HEIGHT_FORM_CONTROL_M - 2];
    case EButtonSize.L:
      return [SIZE.PADDING_X_FORM_CONTROL_L, SIZE.HEIGHT_FORM_CONTROL_L, SIZE.HEIGHT_FORM_CONTROL_L - 2];
    case EButtonSize.XL:
      return [SIZE.PADDING_X_FORM_CONTROL_XL, SIZE.HEIGHT_FORM_CONTROL_XL, SIZE.HEIGHT_FORM_CONTROL_XL - 2];
    default: // 默认无大小设置
      return null;
  }
}
