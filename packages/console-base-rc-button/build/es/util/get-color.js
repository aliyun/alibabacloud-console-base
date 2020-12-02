import { COLOR } from '@alicloud/console-base-styled-mixin';
import { EButtonThemeColor } from '../const';
export default function getColor(value) {
  switch (value) {
    case EButtonThemeColor.INHERIT:
      return 'inherit';

    case EButtonThemeColor.BLACK:
      return COLOR.TEXT_TITLE;

    case EButtonThemeColor.NORMAL:
      return COLOR.TEXT_PRIMARY;

    case EButtonThemeColor.GRAY:
      return COLOR.TEXT_SECONDARY;

    case EButtonThemeColor.WHITE:
      return '#fff';

    case EButtonThemeColor.LINK:
      return COLOR.LINK;

    case EButtonThemeColor.LINK_GRAY:
      return COLOR.LINK_GRAY;

    case EButtonThemeColor.BRAND:
      return COLOR.BRAND_ALIYUN;

    case EButtonThemeColor.PRIMARY:
      return COLOR.INFO;

    case EButtonThemeColor.PRIMARY_SHADE:
      return COLOR.INFO_DARK;

    default:
      return 'inherit';
  }
}