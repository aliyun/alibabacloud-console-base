import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  EButtonFontSize
} from '../const';

export default function getFontSize(value: EButtonFontSize): number {
  switch (value) {
    case EButtonFontSize.M:
      return SIZE.FONT_SIZE_FORM_CONTROL_M;
    case EButtonFontSize.S:
      return SIZE.FONT_SIZE_FORM_CONTROL_S;
    case EButtonFontSize.XS:
      return SIZE.FONT_SIZE_FORM_CONTROL_XS;
    case EButtonFontSize.L:
      return SIZE.FONT_SIZE_FORM_CONTROL_L;
    case EButtonFontSize.XL:
      return SIZE.FONT_SIZE_FORM_CONTROL_XL;
    default:
      return 0;
  }
}
