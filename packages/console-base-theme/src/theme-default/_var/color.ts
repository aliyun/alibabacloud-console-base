const ACCENT = '#0064c8';
const ERROR = '#d93026';

export default {
  // 品牌色
  BRAND_ALIYUN: '#ff6a00',
  
  // --------------------------------------------------------------- //
  // 文本色（包括链接）
  // --------------------------------------------------------------- //
  
  // 彩色文本
  TEXT_ACCENT: ACCENT,
  TEXT_ERROR: ERROR, // 错误
  TEXT_WARN: '#ffc440', // 警告
  TEXT_SUCCESS: '#1e8e3e', // 积极和正面引导的文本，如「验证通过」、「已支付」等 TODO TEXT_POSITIVE
  TEXT_INFO: ACCENT, // 重要提示
  TEXT_EMPHASIS: '#ff6a00', // 突出说明，如「金额」、「最重要链接」等，主要用于 em 元素
  TEXT_CODE: '#f25c7f', // 用于 code 元素
  
  // 无色文本
  TEXT_TITLE: '#111', // 标题
  TEXT_PRIMARY: '#333', // 主要文字
  TEXT_SECONDARY: '#555', // 次要文字
  TEXT_CAPTION: '#888', // 说明文字
  TEXT_DISABLED: '#c1c1c1', // Disabled 状态文字
  
  // 链接
  LINK_PRIMARY: ACCENT, // TODO LINK
  LINK_PRIMARY_HOVER: ACCENT,
  LINK_PRIMARY_ACTIVE: ACCENT,
  LINK_PRIMARY_VISITED: ACCENT,
  LINK_PRIMARY_DISABLED: '#c1c1c1',
  LINK_SECONDARY: '#333', // 次要链接 TODO LINK_GRAY
  LINK_SECONDARY_HOVER: ACCENT,
  LINK_SECONDARY_ACTIVE: ACCENT,
  LINK_SECONDARY_VISITED: '#333',
  LINK_SECONDARY_DISABLED: '#c1c1c1',
  
  // --------------------------------------------------------------- //
  // 线条色
  // --------------------------------------------------------------- //
  LINE_ACCENT: ACCENT,
  LINE_ERROR: ERROR,
  LINE_DIVIDER: '#efefef', // 浅色分割线 TODO LINE_LIGHT
  LINE_DIVIDER_FADED: 'rgba(0,0,0,0.0627)',
  LINE_BORDER: '#dedede', // 组件边框 TODO LINE
  LINE_BORDER_FADED: 'rgba(0,0,0,0.1294)',
  LINE_BORDER_HOVER: '#c0c6cc', // 深色分割线、组件边框 Hover 效果 TODO LINE_DARK
  LINE_BORDER_HOVER_FADED: 'rgba(0,24,49,0.2471)',
  
  // --------------------------------------------------------------- //
  // 填充色
  // --------------------------------------------------------------- //
  FILL_LIGHT: '#f7f9fa', // 白底 hover
  FILL_LIGHT_FADED: 'rgba(0,64,96,0.03137)',
  FILL_DARK: '#ebebeb', // TODO FILL_DARK
  FILL_DARK_FADED: 'rgba(0,0,0,0.07843)',
  FILL_DARKER: '#dedede', // TODO FILL_DARKER
  FILL_DARKER_FADED: 'rgba(0,0,0,0.1294)',
  FILL_SUCCESS: '#edfcf1', // TODO SUCCESS_LIGHT
  FILL_SUCCESS_FADED: 'rgba(0,212,57,0.0706)',
  FILL_WARN: '#fff7db', // TODO WARN_LIGHT
  FILL_WARN_FADED: 'rgba(255,198,0,0.1412)',
  FILL_ERROR: '#fcefee', // TODO ERROR_LIGHT
  FILL_ERROR_FADED: 'rgba(210,15,0,0.0667)',
  FILL_INFO: '#ebf4fb', // TODO INFO_LIGHT
  FILL_INFO_FADED: 'rgba(0,115,204,0.0784)',
  FILL_HELP: '#f7f7f7', // TODO HELP_LIGHT
  FILL_HELP_FADED: 'rgba(0,0,0,0.0314)',
  
  FILL_MAIN: '#fafafa', // 主填充色，用于整个 body TODO FILL_LIGHTER
  FILL_NAV_LEVEL1: '#fff', // 一级导航（顶栏）
  FILL_NAV_LEVEL2: '#f5f5f5', // 二级导航（应用侧边栏）TODO FILL
  FILL_TABLE_TH: '#f5f5f5',
  FILL_TABLE_TD: '#fff',
  FILL_DIALOG: '#fff',
  FILL_DIALOG_HEADER: '#fff',
  FILL_DIALOG_FOOTER: '#fff',
  FILL_DIALOG_BACKDROP_FADED: 'rgba(0, 0, 0, 0.2)',
  FILL_INPUT: '#fff',
  FILL_INPUT_DISABLED: '#f7f9fa',
  FILL_DROPDOWN: '#fff'
};
