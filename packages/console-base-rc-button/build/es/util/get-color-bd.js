import { COLOR } from '@alicloud/console-base-styled-mixin';
import { EButtonThemeColorBd } from '../const';
export default function getColorBd(value) {
  switch (value) {
    case EButtonThemeColorBd.TRANSPARENT:
      return 'transparent';

    case EButtonThemeColorBd.GRAY_ALPHA:
      return 'rgba(0, 0, 0, 0.1)';

    case EButtonThemeColorBd.GRAY_ALPHA_SHADE:
      return 'rgba(0, 0, 0, 0.25)';

    case EButtonThemeColorBd.GRAY:
      return COLOR.LINE;

    case EButtonThemeColorBd.SHADE:
      return COLOR.LINE_DARK;

    case EButtonThemeColorBd.PRIMARY:
      return COLOR.INFO;

    case EButtonThemeColorBd.BRAND:
      return COLOR.BRAND_ALIYUN;

    case EButtonThemeColorBd.PRIMARY_SHADE:
      return COLOR.INFO_DARK;

    default:
      return '';
  }
}