const TEXT_BRAND = '#ff6a00';
const TEXT_ACCENT = '#0064c8';
const TEXT_PRIMARY = '#333';
const TEXT_SECONDARY = '#666';
const TEXT_TERTIARY = '#999';
const TEXT_DISABLED = '#ccc';
const TEXT_HELP = '#888';
const TEXT_INFO = '#0064c8';
const TEXT_SUCCESS = '#1e8e3e';
const TEXT_WARNING = '#ffc440';
const TEXT_ERROR = '#d93026';
const TEXT_DANGER = '#d93026';

const BORDER_BRAND = TEXT_BRAND;
const BORDER_ACCENT = TEXT_ACCENT;
const BORDER_PRIMARY = '#efefef';
const BORDER_SECONDARY = '#dedede';
const BORDER_TERTIARY = '#c0c6cc';
const BORDER_DISABLED = '#ccc';
const BORDER_HELP = TEXT_HELP;
const BORDER_INFO = TEXT_INFO;
const BORDER_SUCCESS = TEXT_SUCCESS;
const BORDER_WARNING = TEXT_WARNING;
const BORDER_ERROR = TEXT_ERROR;
const BORDER_DANGER = TEXT_DANGER;
const BORDER_INPUT = '#c0c6cc';
const BORDER_INPUT_HOVER = BORDER_INPUT;
const BORDER_INPUT_FOCUS = TEXT_ACCENT;
// const BORDER_PRIMARY_FADE = 'rgba(0,0,0,0.0627)';
// const BORDER_SECONDARY_FADE = 'rgba(0,0,0,0.1294)';
// const BORDER_TERTIARY_FADE = 'rgba(0,24,49,0.2471)';

const BG_BRAND = TEXT_BRAND;
const BG_ACCENT = TEXT_ACCENT;
const BG_PRIMARY = '#fff'; // 视觉上第一层级的背景色（用于 level1 的导航、dialog、dropdown 等）
const BG_SECONDARY = '#f7f9fa'; // 视觉上第二层级的背景色（用于 level2 的导航）
const BG_TERTIARY = '#ebebeb'; // 视觉上第三层级的背景色（用于 body）
const BG_DISABLED = '#d1d5d8';
const BG_HELP = '#f7f7f7';
const BG_INFO = '#ebf4fb';
const BG_SUCCESS = '#edfcf1';
const BG_WARNING = '#fff7db';
const BG_ERROR = '#fcefee';
const BG_DANGER = '#fcefee';

const LINK_PRIMARY = TEXT_ACCENT;
const LINK_PRIMARY_VISITED = TEXT_ACCENT;
const LINK_PRIMARY_HOVER = TEXT_ACCENT;
const LINK_PRIMARY_ACTIVE = TEXT_ACCENT;
const LINK_PRIMARY_DISABLED = TEXT_DISABLED;
const LINK_SECONDARY = TEXT_SECONDARY;
const LINK_SECONDARY_VISITED = TEXT_SECONDARY;
const LINK_SECONDARY_HOVER = TEXT_ACCENT;
const LINK_SECONDARY_ACTIVE = TEXT_ACCENT;
const LINK_SECONDARY_DISABLED = TEXT_DISABLED;
const LINK_TERTIARY = TEXT_SECONDARY;
const LINK_TERTIARY_VISITED = TEXT_SECONDARY;
const LINK_TERTIARY_HOVER = TEXT_PRIMARY;
const LINK_TERTIARY_ACTIVE = TEXT_PRIMARY;
const LINK_TERTIARY_DISABLED = TEXT_DISABLED;
const LINK_BRAND = TEXT_BRAND;
const LINK_BRAND_VISITED = TEXT_BRAND;
const LINK_BRAND_HOVER = TEXT_BRAND;
const LINK_BRAND_ACTIVE = TEXT_BRAND;
const LINK_BRAND_DISABLED = TEXT_DISABLED;
const LINK_BRAND_SECONDARY = TEXT_SECONDARY;
const LINK_BRAND_SECONDARY_VISITED = TEXT_SECONDARY;
const LINK_BRAND_SECONDARY_HOVER = TEXT_BRAND;
const LINK_BRAND_SECONDARY_ACTIVE = TEXT_BRAND;
const LINK_BRAND_SECONDARY_DISABLED = TEXT_DISABLED;

const INPUT_PLACEHOLDER = TEXT_TERTIARY;
const INPUT_TEXT = TEXT_PRIMARY;
const INPUT_BORDER = BORDER_INPUT;
const INPUT_BG = BG_PRIMARY;
const INPUT_TEXT_HOVER = TEXT_PRIMARY;
const INPUT_BORDER_HOVER = BORDER_INPUT_HOVER;
const INPUT_BG_HOVER = BG_PRIMARY;
const INPUT_TEXT_FOCUS = TEXT_PRIMARY;
const INPUT_BORDER_FOCUS = BORDER_INPUT_FOCUS;
const INPUT_BG_FOCUS = BG_PRIMARY;
const INPUT_TEXT_DISABLED = TEXT_DISABLED;
const INPUT_BORDER_DISABLED = BORDER_DISABLED;
const INPUT_BG_DISABLED = BG_DISABLED;

/**
 * 参考 github 的命名
 * 
 * 大的分类（前缀）
 * - `TEXT_` 前景色（文字、图标）
 * - `LINK_` 链接色
 * - `BORDER_` 边框色、线条色
 * - `BG_` 背景色、填充色
 * 
 * 每个分类必须包含：
 * 
 * - BRAND 品牌色
 * - ACCENT 强调色
 * - PRIMARY 第一级
 * - SECONDARY 第二级
 * - TERTIARY 第三级
 * - DISABLED 禁用色
 * - HELP 帮助色
 * - INFO 信息色
 * - SUCCESS 成功色
 * - WARNING 警告色
 * - ERROR 错误色
 * - DANGER 危险色
 */
export default {
  // --------------------------------------------------------------- //
  // 通用文本
  // --------------------------------------------------------------- //
  TEXT_BRAND,
  TEXT_ACCENT,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY, // 用于说明性的文字
  TEXT_DISABLED,
  TEXT_INFO,
  TEXT_SUCCESS,
  TEXT_WARNING,
  TEXT_ERROR,
  TEXT_DANGER,
  TEXT_TITLE: '#111',
  TEXT_EMPHASIS: '#ff6a00', // 突出说明，如「金额」、「最重要链接」等，用于 em 或未读标记,
  TEXT_CODE: '#f25c7f', // 用于 code 元素
  
  // --------------------------------------------------------------- //
  // 通用边框
  // --------------------------------------------------------------- //
  BORDER_BRAND,
  BORDER_ACCENT,
  BORDER_PRIMARY,
  BORDER_SECONDARY,
  BORDER_TERTIARY,
  BORDER_DISABLED,
  BORDER_HELP,
  BORDER_INFO,
  BORDER_SUCCESS,
  BORDER_WARNING,
  BORDER_ERROR,
  BORDER_DANGER,
  
  // --------------------------------------------------------------- //
  // 通用背景
  // --------------------------------------------------------------- //
  BG_BRAND,
  BG_ACCENT,
  BG_PRIMARY,
  BG_SECONDARY,
  BG_TERTIARY,
  BG_DISABLED,
  BG_HELP,
  BG_INFO,
  BG_SUCCESS,
  BG_WARNING,
  BG_ERROR,
  BG_DANGER,
  
  // --------------------------------------------------------------- //
  // 组件 - 链接
  // --------------------------------------------------------------- //
  LINK_PRIMARY,
  LINK_PRIMARY_VISITED,
  LINK_PRIMARY_HOVER,
  LINK_PRIMARY_ACTIVE,
  LINK_PRIMARY_DISABLED,
  LINK_SECONDARY,
  LINK_SECONDARY_VISITED,
  LINK_SECONDARY_HOVER,
  LINK_SECONDARY_ACTIVE,
  LINK_SECONDARY_DISABLED,
  LINK_TERTIARY,
  LINK_TERTIARY_VISITED,
  LINK_TERTIARY_HOVER,
  LINK_TERTIARY_ACTIVE,
  LINK_TERTIARY_DISABLED,
  LINK_BRAND,
  LINK_BRAND_VISITED,
  LINK_BRAND_HOVER,
  LINK_BRAND_ACTIVE,
  LINK_BRAND_DISABLED,
  LINK_BRAND_SECONDARY,
  LINK_BRAND_SECONDARY_VISITED,
  LINK_BRAND_SECONDARY_HOVER,
  LINK_BRAND_SECONDARY_ACTIVE,
  LINK_BRAND_SECONDARY_DISABLED,
  
  // --------------------------------------------------------------- //
  // 组件 - 输入框
  // --------------------------------------------------------------- //
  INPUT_PLACEHOLDER,
  INPUT_TEXT,
  INPUT_BORDER,
  INPUT_BG,
  INPUT_TEXT_HOVER,
  INPUT_BORDER_HOVER,
  INPUT_BG_HOVER,
  INPUT_TEXT_FOCUS,
  INPUT_BORDER_FOCUS,
  INPUT_BG_FOCUS,
  INPUT_TEXT_DISABLED,
  INPUT_BORDER_DISABLED,
  INPUT_BG_DISABLED,
  
  // --------------------------------------------------------------- //
  // TODO 杀以下
  // --------------------------------------------------------------- //
  // BRAND_ALIYUN: '#ff6a00', // TODO remove
  // TEXT_WARN: '#ffc440', // TODO remove
  // TEXT_CAPTION: '#888', // TODO remove
  // LINE_BRAND: TEXT_BRAND, // TODO remove
  // LINE_DIVIDER: '#efefef', // 浅色分割线 TODO LINE_LIGHT
  // LINE_DIVIDER_FADE: 'rgba(0,0,0,0.0627)',
  LINE_BORDER: '#dedede', // 组件边框 TODO LINE
  LINE_BORDER_FADE: 'rgba(0,0,0,0.1294)',
  LINE_BORDER_HOVER: '#c0c6cc', // 深色分割线、组件边框 Hover 效果 TODO LINE_DARK
  // FILL_BRAND: TEXT_BRAND,
  // FILL_ACCENT: TEXT_ACCENT,
  // FILL_LIGHT: '#f7f9fa', // 白底 hover
  // FILL_LIGHT_FADE: 'rgba(0,64,96,0.03137)',
  // FILL_DARK: '#ebebeb',
  // FILL_DARKER: '#dedede',
  // FILL_SUCCESS: '#edfcf1',
  // FILL_NAV_LEVEL1: '#f5f5f5', // 二级导航（应用侧边栏）TODO FILL
  // FILL_NAV_LEVEL2: '#f5f5f5', // 二级导航（应用侧边栏）TODO FILL
  // FILL_TABLE_TH: '#f5f5f5',
  // FILL_TABLE_TD: '#fff',
  FILL_DIALOG: '#fff',
  // FILL_DIALOG_HEADER: '#fff',
  // FILL_DIALOG_FOOTER: '#fff',
  FILL_DIALOG_BACKDROP_FADE: 'rgba(0, 0, 0, 0.2)',
  FILL_INPUT: '#fff',
  FILL_INPUT_DISABLED: '#f7f9fa',
  FILL_DROPDOWN: '#fff'
};
