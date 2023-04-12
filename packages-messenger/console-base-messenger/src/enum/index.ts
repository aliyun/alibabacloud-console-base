/**
 * 控制台应用发给 console-base 的消息类型（不可随意修改）
 *
 * 前缀 `app_2_console_base:`
 */
export enum EMessageBroadcastByApp {
  /* ********************************************
   * 杂项
   ******************************************* */
  FETCHER_REQUEST = 'app_2_console_base:fetcher_request',
  LAUNCH_WIDGET = 'app_2_console_base:launch_widget',
  ARMS_ERROR = 'app_2_console_base:arms/error',
  SET_PRODUCT_ID = 'app_2_console_base:set_product_id',
  /* ********************************************
   * 微文档
   ******************************************* */
  HELP_OPEN = 'app_2_console_base:help/open'
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
  FASTBUY_ORDER_FINISH = 'console_base_2_app:fastbuy/order_finish'
}
