const GREEN = '#1e8e3e';
const ORANGE = '#ffc440';
const RED = '#d93026';
const BLUE = '#0070cc';
const GRAY = '#888';

/**
 * @deprecated use @alicloud/console-base-theme
 */
export default {
  // 品牌色
  BRAND_ALIYUN: '#ff6a00',
  BRAND_ALIYUN_LIGHT: '#ff791a',
  
  // --------------------------------------------------------------- //
  // 功能色
  // * XX 正常文字或背景色
  // * XX_DARK - Hover 的文字或背景色
  // * XX_LIGHT - 作为浅底色
  // * XX_DISABLED - Disabled 状态下的文字或背景色
  // --------------------------------------------------------------- //
  
  // 成功（绿）
  SUCCESS: GREEN,
  SUCCESS_DARK: '#176e30',
  SUCCESS_LIGHT: '#edfcf1',
  SUCCESS_DISABLED: '#acdcba',
  
  // 警告（黄）
  WARN: ORANGE,
  WARN_DARK: '#f1a600',
  WARN_LIGHT: '#fff7db',
  WARN_DISABLED: '#ffe9ab',
  
  // 错误（红）
  ERROR: RED,
  ERROR_DARK: '#b82920',
  ERROR_LIGHT: '#fcefee',
  ERROR_DISABLED: '#ffc4c0',
  
  // 提示（蓝）
  INFO: BLUE,
  INFO_DARK: '#005aa5',
  INFO_LIGHT: '#ebf4fb',
  INFO_DISABLED: '#a0cbed',
  
  // 帮助（灰）
  HELP: GRAY,
  HELP_DARK: '#333',
  HELP_LIGHT: '#f7f7f7',
  HELP_DISABLED: '#c9c9c9',
  
  // --------------------------------------------------------------- //
  // 文本色（包括链接）
  // --------------------------------------------------------------- //
  
  // 彩色文本
  TEXT_ERROR: RED, // 错误
  TEXT_WARN: ORANGE, // 警告
  TEXT_EMPHASIS: '#ff6a00', // 突出说明，如「金额」、「最重要链接」等
  TEXT_INFO: BLUE, // 重要提示
  TEXT_POSITIVE: GREEN, // 积极和正面引导的文本，如「验证通过」、「已支付」等
  
  // 无色文本
  TEXT_TITLE: '#111', // 标题
  TEXT_PRIMARY: '#333', // 主要文字
  TEXT_SECONDARY: '#555', // 次要文字
  TEXT_CAPTION: '#888', // 说明文字
  TEXT_DISABLED: '#c1c1c1', // Disabled 状态文字
  
  // 链接
  LINK: '#0070cc',
  LINK_GRAY: '#333', // 次要链接
  
  // --------------------------------------------------------------- //
  // 线条色 - 收敛成两个
  // --------------------------------------------------------------- //
  LINE_LIGHT: '#efefef', // 浅色分割线
  LINE: '#dedede', // 默认分割线、组件边框
  LINE_DARK: '#737373', // 深色分割线、组件边框 Hover 效果
  
  // --------------------------------------------------------------- //
  // 填充色（浅灰色）
  // --------------------------------------------------------------- //
  FILL_LIGHTER: '#fafafa',
  FILL_LIGHT: '#f7f7f7',
  FILL: '#f5f5f5',
  FILL_DARK: '#ebebeb',
  FILL_DARKER: '#dedede'
};
