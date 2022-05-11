import {
  IColorEssential
} from '../types';

const TRANSPARENT = 'transparent';
const WHITE = '#fff';
const BLACK = '#000';
const INVERSE = '#fff';
const INVERSE_BG = '#000';
const BRAND = '#ff6a00';
const BRAND_HOVER = '#ff6a00';
const BRAND_ACTIVE = '#e50';
const ACCENT = '#0064c8';
const ACCENT_HOVER = '#0064c8';
const ACCENT_ACTIVE = '#0050a0';
const EMPHASIS = '#ff6a00'; // 突出说明，如「金额」、「最重要链接」等，用于 em 或未读标记,
const DANGER = '#c80000';
const CODE = '#39f';
const GRAY_PRIMARY = '#333';
const GRAY_SECONDARY = '#666';
const GRAY_TERTIARY = '#999';
const GRAY_DISABLED = '#c0c6cc';
const GRAY_PRIMARY_BD = '#d1d5d9';
const GRAY_SECONDARY_BD = '#e3e4e6';
const GRAY_TERTIARY_BD = '#ebebeb';
const GRAY_DISABLED_BD = '#e3e4e6';
const GRAY_PRIMARY_BG = '#fff'; // 视觉上第一层级的背景色（用于 level1 的导航、dialog、dropdown 等）
const GRAY_SECONDARY_BG = '#f4f6f7'; // 视觉上第二层级的背景色（用于 level2 的导航）
const GRAY_TERTIARY_BG = '#eee'; // 视觉上第三层级的背景色（用于 body）
const GRAY_DISABLED_BG = '#e3e4e6';
const GRAY_SECONDARY_FADE_BG = 'rgba(0,46,70,0.04314)'; // 等价于 BG_SECONDARY
const GRAY_TERTIARY_FADE_BG = 'rgba(0,0,0,0.066667)'; // 等价于 BG_TERTIARY
const HELP = '#888';
const INFO = '#0064c8';
const SUCCESS = '#1e8e3e';
const WARNING = '#ffc440';
const ERROR = '#d93026';
const HELP_TINT = '#f7f7f7';
const INFO_TINT = '#ebf4fb';
const SUCCESS_TINT = '#edfcf1';
const WARNING_TINT = '#fff7db';
const ERROR_TINT = '#fcefee';
const HELP_TINT_FADE = 'rgba(0,0,0,0.031373)';
const INFO_TINT_FADE = 'rgba(0,115,204,0.078431)';
const SUCCESS_TINT_FADE = 'rgba(0,212,57,0.070588)';
const WARNING_TINT_FADE = 'rgba(255,198,0,0.141176)';
const ERROR_TINT_FADE = 'rgba(210,15,0,0.066667)';
const SHADOW = 'rgba(0,0,0,0.16)';
const BACKDROP = 'rgba(0,0,0,0.2)';

export const COLOR_ESSENTIAL: IColorEssential = {
  TRANSPARENT,
  WHITE,
  BLACK,
  INVERSE,
  INVERSE_BG,
  BRAND,
  BRAND_HOVER,
  BRAND_ACTIVE,
  ACCENT,
  ACCENT_HOVER,
  ACCENT_ACTIVE,
  DANGER,
  EMPHASIS,
  CODE,
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
  SUCCESS,
  WARNING,
  ERROR,
  HELP_TINT,
  INFO_TINT,
  SUCCESS_TINT,
  WARNING_TINT,
  ERROR_TINT,
  HELP_TINT_FADE,
  INFO_TINT_FADE,
  SUCCESS_TINT_FADE,
  WARNING_TINT_FADE,
  ERROR_TINT_FADE,
  SHADOW,
  BACKDROP
};
