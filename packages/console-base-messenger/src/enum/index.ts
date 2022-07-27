/**
 * 控制台应用发给 console-base 的消息类型（不可随意修改）
 *
 * 前缀 `app_2_console_base:`
 */
export enum EMessageBroadcastByApp {
  /* ********************************************
   * 杂项
   ******************************************* */
  PROMPT_ERROR = 'app_2_console_base:prompt_error',
  FETCHER_REQUEST = 'app_2_console_base:fetcher_request',
  TOGGLE_TOP_NAV = 'app_2_console_base:top_nav/toggle',
  LAUNCH_WIDGET = 'app_2_console_base:launch_widget',
  ARMS_ERROR = 'app_2_console_base:arms/error',
  SET_PRODUCT_ID = 'app_2_console_base:set_product_id',
  /* ********************************************
   * 微文档
   ******************************************* */
  HELP_OPEN = 'app_2_console_base:help/open',
  /* ********************************************
   * 微教程
   ******************************************* */
  TUTOR_REGISTER = 'app_2_console_base:tutor/register',
  TUTOR_OPEN = 'app_2_console_base:tutor/open',
  TUTOR_CLOSE = 'app_2_console_base:tutor/close',
  /* ********************************************
   * 微偏好
   ******************************************* */
  MICRO_PREF_TOGGLE = 'app_2_console_base:micro_pref/toggle',
  /* ********************************************
   * 微浏览器传送门
   ******************************************* */
  MICRO_BROWSER_PORTAL_CREATED = 'app_2_console_base:micro_browser_portal/created',
  MICRO_BROWSER_PORTAL_REMOVED = 'app_2_console_base:micro_browser_portal/removed',
  MICRO_BROWSER_PORTAL_TOGGLE_VISIBLE = 'app_2_console_base:micro_browser_portal/toggle_visible'
}

/**
 * ConsoleBase 通知外部应用的消息类型（不可随意修改）
 *
 * 前缀 `console_base_2_app:`
 */
export enum EMessageBroadcastByConsoleBase {
  /* ********************************************
   * 主题
   ******************************************* */
  THEME_CHANGE = 'console_base_2_app:theme/change',
  /* ********************************************
   * 微售卖
   ******************************************* */
  FASTBUY_CLOSE = 'console_base_2_app:fastbuy/close',
  FASTBUY_BUY = 'console_base_2_app:fastbuy/buy',
  FASTBUY_SUBMIT_PAYMENT = 'console_base_2_app:fastbuy/submit_payment',
  FASTBUY_ORDER_FINISH = 'console_base_2_app:fastbuy/order_finish',
  /* ********************************************
   * 微教程
   ******************************************* */
  TUTOR_STEP_CHANGE = 'console_base_2_app:tutor/step-change',
  TUTOR_ACTION = 'console_base_2_app:tutor/action',
  TUTOR_DISMISS = 'console_base_2_app:tutor/dismiss',
  /* ********************************************
   * 微偏好
   ******************************************* */
  MICRO_PREF_UPDATED = 'console_base_2_app:micro_pref/updated'
}

export enum EToolkitTypeShort {
  SET_GO_TOP_CONTAINER = 'go_top:set_container',
  ADD = 'add', // 添加工具
  REMOVE = 'remove', // 移除工具
  TOOL_CLICKED = 'tool:clicked',
  TOOL_ACTIVATED = 'tool:activated',
  TOOL_DEACTIVATED = 'tool:deactivated',
  TOOL_TOOLTIP_CLOSE = 'tool:tooltip_close'
}