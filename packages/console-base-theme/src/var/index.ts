import {
  ThemeColors,
  COLOR_LIGHT as COLOR
} from '@alicloud/console-base-theme-color';

import TYPO from './typo';
import SIZE from './size';
import Z_INDEX from './z-index';

type ThemeTypo = typeof TYPO;
type ThemeSize = typeof SIZE;
type ThemeZIndex = typeof Z_INDEX;

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
  ThemeTypo,
  ThemeSize,
  ThemeZIndex
};
