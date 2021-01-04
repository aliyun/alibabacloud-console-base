import COLOR from './color';
import TYPO from './typo';
import SIZE from './size';
import Z_INDEX from './z-index';

type ThemeColor = typeof COLOR;
type ThemeTypo = typeof TYPO;
type ThemeSize = typeof SIZE;
type ThemeZIndex = typeof Z_INDEX;

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
  ThemeColor,
  ThemeTypo,
  ThemeSize,
  ThemeZIndex
};
