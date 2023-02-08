import {
  ThemeColors,
  COLOR_LIGHT as COLOR
} from '@alicloud/console-base-theme-color';

import TYPO from './typo';
import SIZE from './size';
import Z_INDEX from './z-index';

type TThemeTypo = typeof TYPO;
type TThemeSize = typeof SIZE;
type TThemeZIndex = typeof Z_INDEX; // eslint-disable-line @typescript-eslint/naming-convention

/**
 * 默认主题（亮色）的所有变量
 */
export default {
  COLOR,
  TYPO,
  SIZE,
  Z_INDEX
};

export {
  COLOR,
  TYPO,
  SIZE,
  Z_INDEX
};

export type {
  ThemeColors,
  TThemeTypo as ThemeTypo,
  TThemeSize as ThemeSize,
  TThemeZIndex as ThemeZIndex
};
