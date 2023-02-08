/**
 * z-index 层级设计
 */
export default {
  DIALOG_SYS: 2101, // 系统级模态框（alert、confirm、prompt）
  BACKDROP_SYS: 2100, // 系统级模态窗背投
  
  MICRO_BROWSER: 2050, // 微浏览器
  
  ERROR_PROMPT: 2001, // 错误弹窗
  BACKDROP_ERROR_PROMPT: 2000, // 错误弹窗背投
  
  POPUP_GLOBAL: 1001, // 全局浮层（dropdown、tooltip 等）
  DIALOG_NORMAL: 1001, // 一般模态窗
  BACKDROP_NORMAL: 999, // 一般模态窗背投
  
  TOP_NAV: 999, // 全局顶栏
  SIDE_PANEL: 99, // 全局侧边栏
  
  DIALOG_SLIDE: 200, // 侧拉窗
  BACKDROP_SLIDE: 100, // 侧拉窗背投
  
  TOOLKIT: 99, // 全局工具
  
  POPUP: 10 // inline 浮层（dropdown、tooltip 等）
};
