/**
 * 主题颜色色板
 * 
 * 参考控制台设计 <https://xconsole.aliyun-inc.com/nexconsole/resources>
 */
export interface IThemeColors {
  // 品牌色
  BRAND_ALIYUN: string;
  
  // --------------------------------------------------------------- //
  // 文本色（包括链接）
  // --------------------------------------------------------------- //
  
  // 彩色文本
  TEXT_ERROR: string; // 错误
  TEXT_WARN: string; // 警告
  TEXT_EMPHASIS: string; // 突出说明，如「金额」、「最重要链接」等
  TEXT_INFO: string; // 重要提示
  TEXT_POSITIVE: string; // 积极和正面引导的文本，如「验证通过」、「已支付」等
  
  // 无色文本
  TEXT_TITLE: string; // 标题
  TEXT_PRIMARY: string; // 主要文字
  TEXT_SECONDARY: string; // 次要文字
  TEXT_CAPTION: string; // 说明文字
  TEXT_DISABLED: string; // Disabled 状态文字
  
  // 链接
  LINK: string;
  LINK_GRAY: string; // 次要链接
  
  // --------------------------------------------------------------- //
  // 线条色 - 收敛成两个
  // --------------------------------------------------------------- //
  LINE_LIGHT: string; // 浅色分割线
  LINE: string; // 默认分割线、组件边框
  LINE_DARK: string; // 深色分割线、组件边框 Hover 效果
  
  // --------------------------------------------------------------- //
  // 填充色（浅灰色）
  // --------------------------------------------------------------- //
  FILL_LIGHTER: string;
  FILL_LIGHT: string;
  FILL: string;
  FILL_DARK: string;
  FILL_DARKER: string;
  
  // --------------------------------------------------------------- //
  // 功能色
  // * XX 正常文字或背景色
  // * XX_DARK - Hover 的文字或背景色
  // * XX_LIGHT - 作为浅底色
  // * XX_DISABLED - Disabled 状态下的文字或背景色
  // --------------------------------------------------------------- //
  
  // 成功（绿）
  SUCCESS: string;
  SUCCESS_DARK: string;
  SUCCESS_LIGHT: string;
  SUCCESS_DISABLED: string;

  // 警告（黄）
  WARN: string;
  WARN_DARK: string;
  WARN_LIGHT: string;
  WARN_DISABLED: string;

  // 错误（红）
  ERROR: string;
  ERROR_DARK: string;
  ERROR_LIGHT: string;
  ERROR_DISABLED: string;

  // 提示（蓝）
  INFO: string;
  INFO_DARK: string;
  INFO_LIGHT: string;
  INFO_DISABLED: string;
  
  // 帮助（灰）
  HELP: string;
  HELP_DARK: string;
  HELP_LIGHT: string;
  HELP_DISABLED: string;
}
