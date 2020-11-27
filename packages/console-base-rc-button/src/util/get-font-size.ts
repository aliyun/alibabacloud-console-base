import {
  FORM_CONTROL
} from '@alicloud/console-base-styled-mixin';

import {
  EButtonFontSize
} from '../const';

const {
  FONT_SIZE
} = FORM_CONTROL;

export default function getFontSize(value: EButtonFontSize): number {
  switch (value) {
    case EButtonFontSize.M:
      return FONT_SIZE.M;
    case EButtonFontSize.S:
      return FONT_SIZE.S;
    case EButtonFontSize.XS:
      return FONT_SIZE.XS;
    case EButtonFontSize.L:
      return FONT_SIZE.L;
    case EButtonFontSize.XL:
      return FONT_SIZE.XL;
    default:
      return 0;
  }
}
