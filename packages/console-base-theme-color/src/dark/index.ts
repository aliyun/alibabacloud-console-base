import {
  IColorEssential
} from '../types';
import createThemeColor from '../util/create-theme-color';

// const TRANSPARENT = 'transparent';
// const WHITE = '#fff';
// const BLACK = '#000';
const INVERSE = '#000';
const INVERSE_BG = '#fff';
// const BRAND = '#ff6a00';
// const BRAND_HOVER = '#ff6a00';
// const BRAND_ACTIVE = '#e50';
// const ACCENT = '#0064c8';
// const ACCENT_HOVER = '#0064c8';
// const ACCENT_ACTIVE = '#0050a0';
// const EMPHASIS = '#ff6a00';
// const DANGER = '#c80000';
// const CODE = '#f25c7f';
const GRAY_PRIMARY = '#d8d9da';
const GRAY_SECONDARY = '#ccc';
const GRAY_TERTIARY = '#999';
const GRAY_DISABLED = '#504a44';
const GRAY_PRIMARY_BD = '#888';
const GRAY_SECONDARY_BD = '#67676f';
const GRAY_TERTIARY_BD = '#45454c';
const GRAY_DISABLED_BD = '#30363d';
const GRAY_PRIMARY_BG = '#333';
const GRAY_SECONDARY_BG = '#202023';
const GRAY_TERTIARY_BG = '#121417';
const GRAY_DISABLED_BG = '#161b22';
const GRAY_SECONDARY_FADE_BG = 'rgba(37,37,41,0.862745)';
const GRAY_TERTIARY_FADE_BG = 'rgba(20,22,25,0.909804)';
const HELP = '#555';
// const INFO = '#0064c8';
// const SUCCESS = '#1e8e3e';
// const WARNING = '#ffc440';
// const ERROR = '#d93026';
const HELP_BG = '#333';
// const INFO_BG = '#ebf4fb';
// const SUCCESS_BG = '#edfcf1';
// const WARNING_BG = '#fff7db';
// const ERROR_BG = '#fcefee';
const HELP_BG_FADE = 'rgba(127,127,127,0.666667)';
// const INFO_BG_FADE = 'rgba(0,255,255,0.215686)';
// const SUCCESS_BG_FADE = 'rgba(0,212,57,0.070588)';
// const WARNING_BG_FADE = 'rgba(255,198,0,0.141176)';
// const ERROR_BG_FADE = 'rgba(210,15,0,0.066667)';
const SHADOW = 'rgba(255,255,255,0.2)';
const BACKDROP = 'rgba(255,255,255,0.2)';

const COLOR_ESSENTIAL_OVERRIDE: Partial<IColorEssential> = {
  // TRANSPARENT,
  // WHITE,
  // BLACK
  INVERSE,
  INVERSE_BG,
  // BRAND,
  // BRAND_HOVER,
  // BRAND_ACTIVE,
  // ACCENT,
  // ACCENT_HOVER,
  // ACCENT_ACTIVE,
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
  // INFO,
  // SUCCESS,
  // WARNING,
  // ERROR,
  HELP_BG,
  // INFO_BG,
  // SUCCESS_BG,
  // WARNING_BG,
  // ERROR_BG,
  HELP_BG_FADE,
  // INFO_BG_FADE,
  // SUCCESS_BG_FADE,
  // WARNING_BG_FADE,
  // ERROR_BG_FADE,
  SHADOW,
  BACKDROP
};

export default createThemeColor(COLOR_ESSENTIAL_OVERRIDE);
