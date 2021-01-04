import {
  IColorEssential
} from '../types';

const TRANSPARENT = 'transparent';
const WHITE = '#fff';
const BRAND = '#ff6a00';
const BRAND_HOVER = '#ff6a00';
const BRAND_ACTIVE = '#e50';
const ACCENT = '#0064c8';
const ACCENT_HOVER = '#0064c8';
const ACCENT_ACTIVE = '#0050a0';
const EMPHASIS = '#ff6a00'; // 突出说明，如「金额」、「最重要链接」等，用于 em 或未读标记,
const DANGER = '#c80000';
const CODE = '#f25c7f';
const GRAY_PRIMARY = '#333';
const GRAY_SECONDARY = '#666';
const GRAY_TERTIARY = '#999';
const GRAY_DISABLED = '#c0c6cc';
const GRAY_BD_PRIMARY = '#d1d5d9';
const GRAY_BD_SECONDARY = '#e3e4e6';
const GRAY_BD_TERTIARY = '#ebebeb';
const GRAY_BD_DISABLED = '#c0c6cc';
const GRAY_BG_PRIMARY = '#fff'; // 视觉上第一层级的背景色（用于 level1 的导航、dialog、dropdown 等）
const GRAY_BG_SECONDARY = '#f4f6f7'; // 视觉上第二层级的背景色（用于 level2 的导航）
const GRAY_BG_TERTIARY = '#eee'; // 视觉上第三层级的背景色（用于 body）
const GRAY_BG_DISABLED = '#c0c6cc';
const GRAY_BG_SECONDARY_FADE = 'rgba(0,46,70,0.04314)'; // 等价于 BG_SECONDARY
const GRAY_BG_TERTIARY_FADE = 'rgba(0,0,0,0.066667)'; // 等价于 BG_TERTIARY
const HELP = '#888';
const INFO = '#0064c8';
const SUCCESS = '#1e8e3e';
const WARNING = '#ffc440';
const ERROR = '#d93026';
const HELP_BG = '#f7f7f7';
const INFO_BG = '#ebf4fb';
const SUCCESS_BG = '#edfcf1';
const WARNING_BG = '#fff7db';
const ERROR_BG = '#fcefee';
const HELP_BG_FADE = 'rgba(0,0,0,0.031373)';
const INFO_BG_FADE = 'rgba(0,115,204,0.078431)';
const SUCCESS_BG_FADE = 'rgba(0,212,57,0.070588)';
const WARNING_BG_FADE = 'rgba(255,198,0,0.141176)';
const ERROR_BG_FADE = 'rgba(210,15,0,0.066667)';
const SHADOW = 'rgba(0,0,0,0.16)';
const BACKDROP = 'rgba(0,0,0,0.2)';

export const COLOR_ESSENTIAL: IColorEssential = {
  TRANSPARENT,
  WHITE,
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
  GRAY_BD_PRIMARY,
  GRAY_BD_SECONDARY,
  GRAY_BD_TERTIARY,
  GRAY_BD_DISABLED,
  GRAY_BG_PRIMARY,
  GRAY_BG_SECONDARY,
  GRAY_BG_TERTIARY,
  GRAY_BG_DISABLED,
  GRAY_BG_SECONDARY_FADE,
  GRAY_BG_TERTIARY_FADE,
  HELP,
  INFO,
  SUCCESS,
  WARNING,
  ERROR,
  HELP_BG,
  INFO_BG,
  SUCCESS_BG,
  WARNING_BG,
  ERROR_BG,
  HELP_BG_FADE,
  INFO_BG_FADE,
  SUCCESS_BG_FADE,
  WARNING_BG_FADE,
  ERROR_BG_FADE,
  SHADOW,
  BACKDROP
};
