import { COLOR } from '@alicloud/console-base-styled-mixin';
import { EButtonThemeColorBg } from '../const';
export default function getColorBg(value) {
  switch (value) {
    case EButtonThemeColorBg.LIGHTER:
      return COLOR.FILL_LIGHTER;

    case EButtonThemeColorBg.LIGHT:
      return COLOR.FILL_LIGHT;

    case EButtonThemeColorBg.NORMAL:
      return COLOR.FILL;

    case EButtonThemeColorBg.DARK:
      return COLOR.FILL_DARK;

    case EButtonThemeColorBg.DARKER:
      return COLOR.FILL_DARKER;

    case EButtonThemeColorBg.WHITE:
      return '#fff';

    case EButtonThemeColorBg.BRAND:
      return COLOR.BRAND_ALIYUN;

    case EButtonThemeColorBg.BRAND_LIGHT:
      return COLOR.BRAND_ALIYUN_LIGHT;

    case EButtonThemeColorBg.PRIMARY:
      return COLOR.INFO;

    case EButtonThemeColorBg.PRIMARY_SHADE:
      return COLOR.INFO_DARK;

    default:
      return '';
  }
}