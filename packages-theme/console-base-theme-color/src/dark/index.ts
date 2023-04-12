import {
  IColorEssential
} from '../types';
import {
  createThemeColor
} from '../util';

// const TRANSPARENT = 'transparent';
// const WHITE = '#fff';
// const BLACK = '#000';
const INVERSE = '#000';
const INVERSE_BG = '#fff';
// const BRAND = '#ff6a00';
// const BRAND_HOVER = '#ff6a00';
// const BRAND_ACTIVE = '#e50';
const ACCENT = '#0070cc';
const ACCENT_HOVER = '#0070cc';
const ACCENT_ACTIVE = '#0064c8';
// const EMPHASIS = '#ff6a00';
// const DANGER = '#c80000';
// const CODE = '#f25c7f';
const GRAY_PRIMARY = '#d8d9da';
const GRAY_SECONDARY = '#ccc';
const GRAY_TERTIARY = '#999';
const GRAY_DISABLED = '#666';
const GRAY_PRIMARY_BD = '#888';
const GRAY_SECONDARY_BD = '#67676f';
const GRAY_TERTIARY_BD = '#45454c';
const GRAY_DISABLED_BD = '#30363d';
const GRAY_PRIMARY_BG = '#3a3a3a';
const GRAY_SECONDARY_BG = '#272727';
const GRAY_TERTIARY_BG = '#1f1f1f';
const GRAY_DISABLED_BG = '#161b22';
const GRAY_SECONDARY_FADE_BG = 'rgba(255,255,255,0.08)';
const GRAY_TERTIARY_FADE_BG = 'rgba(255,255,255,0.1)';
const HELP = '#777';
const INFO = '#0070cc'; // 稍稍提亮一些
// const SUCCESS = '#1e8e3e';
// const WARNING = '#ffc440';
// const ERROR = '#d93026';
const HELP_TINT = '#333';
const INFO_TINT = '#353e45';
const SUCCESS_TINT = '#36453a';
const WARNING_TINT = '#564e32';
const ERROR_TINT = '#443736';
const HELP_TINT_FADE = 'rgba(127,127,127,0.666667)';
// const INFO_TINT_FADE = 'rgba(0,115,204,0.078431)';
// const SUCCESS_TINT_FADE = 'rgba(0,212,57,0.070588)';
// const WARNING_TINT_FADE = 'rgba(255,198,0,0.141176)';
// const ERROR_TINT_FADE = 'rgba(210,15,0,0.066667)';
const SHADOW = 'rgba(0,0,0,0.32)';
const BACKDROP = 'rgba(0,0,0,0.4)';

const COLOR_ESSENTIAL_OVERRIDE: Partial<IColorEssential> = {
  // TRANSPARENT,
  // WHITE,
  // BLACK
  INVERSE,
  INVERSE_BG,
  // BRAND,
  // BRAND_HOVER,
  // BRAND_ACTIVE,
  ACCENT,
  ACCENT_HOVER,
  ACCENT_ACTIVE,
  // DANGER,
  // EMPHASIS,
  // CODE,
  GRAY_PRIMARY,
  GRAY_SECONDARY,
  GRAY_TERTIARY,
  GRAY_DISABLED,
  GRAY_PRIMARY_BD,
  GRAY_SECONDARY_BD,
  GRAY_TERTIARY_BD,
  GRAY_DISABLED_BD,
  GRAY_PRIMARY_BG,
  GRAY_SECONDARY_BG,
  GRAY_TERTIARY_BG,
  GRAY_DISABLED_BG,
  GRAY_SECONDARY_FADE_BG,
  GRAY_TERTIARY_FADE_BG,
  HELP,
  INFO,
  // SUCCESS,
  // WARNING,
  // ERROR,
  HELP_TINT,
  INFO_TINT,
  SUCCESS_TINT,
  WARNING_TINT,
  ERROR_TINT,
  HELP_TINT_FADE,
  // INFO_TINT_FADE,
  // SUCCESS_TINT_FADE,
  // WARNING_TINT_FADE,
  // ERROR_TINT_FADE,
  SHADOW,
  BACKDROP
};

export default createThemeColor(COLOR_ESSENTIAL_OVERRIDE);
