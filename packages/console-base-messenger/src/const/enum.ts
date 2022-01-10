/**
 * 控制台应用发给 console-base 的消息类型（不可随意修改）
 * 
 * 前缀 `app_2_console_base:`
 */
export enum EMessageBroadcastByApp {
  // 杂项
  PROMPT_ERROR = 'app_2_console_base:prompt_error',
  FETCHER_REQUEST = 'app_2_console_base:fetcher_request',
  TOGGLE_TOP_NAV = 'app_2_console_base:top_nav/toggle',
  LAUNCH_TUTORIAL = 'app_2_console_base:launch_tutorial',
  LAUNCH_WIDGET = 'app_2_console_base:launch_widget',
  ARMS_ERROR = 'app_2_console_base:arms/error',
  // 地域选择器
  REGION_SET_PROPS = 'app_2_console_base:region/set_props', // 覆盖 props
  REGION_MERGE_PROPS = 'app_2_console_base:region/merge_props', // 合并 props（适合需要单点更新的场景）
  REGION_TOGGLE = 'app_2_console_base:region/toggle',
  REGION_TOGGLE_GLOBAL = 'app_2_console_base:region/toggle_global',
  REGION_SET_ID = 'app_2_console_base:region/set_id',
  REGION_SET_REGIONS = 'app_2_console_base:region/set_regions',
  REGION_SET_REGION_GROUPS = 'app_2_console_base:region/set_region_groups',
  REGION_SET_RESOURCE_COUNT = 'app_2_console_base:region/set_resource_count',
  // 资源组选择器
  RESOURCE_GROUP_TOGGLE = 'app_2_console_base:resource_group/toggle',
  RESOURCE_GROUP_SET_ID = 'app_2_console_base:resource_group/set_id',
  RESOURCE_GROUP_SET_RESOURCE_COUNT = 'app_2_console_base:resource_group/set_resource_count',
  // 交互式教程
  TUTOR_REGISTER = 'app_2_console_base:tutor/register',
  TUTOR_OPEN = 'app_2_console_base:tutor/open',
  TUTOR_CLOSE = 'app_2_console_base:tutor/close',
  // 微文档浏览器传送门
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
  // 杂项
  READY = 'console_base_2_app:ready',
  // 地域选择器
  REGION_CHANGE = 'console_base_2_app:region/change',
  // 资源组选择器
  RESOURCE_GROUP_DATA_LOADED = 'app_2_console_base:resource_group/data_loaded', // FIXME 前缀写错了...
  RESOURCE_GROUP_CHANGE = 'app_2_console_base:resource_group/change', // FIXME 前缀写错了...
  // 主题
  THEME_CHANGE = 'console_base_2_app:theme/change',
  // fastbuy
  FASTBUY_CLOSE = 'console_base_2_app:fastbuy/close',
  FASTBUY_BUY = 'console_base_2_app:fastbuy/buy',
  FASTBUY_SUBMIT_PAYMENT = 'console_base_2_app:fastbuy/submit_payment',
  FASTBUY_ORDER_FINISH = 'console_base_2_app:fastbuy/order_finish',
  // 交互式教程
  TUTOR_STEP_CHANGE = 'console_base_2_app:tutor/step-change',
  TUTOR_ACTION = 'console_base_2_app:tutor/action',
  TUTOR_DISMISS = 'console_base_2_app:tutor/dismiss'
}

export enum EToolkitTypeShort {
  SET_GO_TOP_CONTAINER = 'go_top:set_container',
  ADD = 'add', // 添加工具
  REMOVE = 'remove', // 移除工具
  TOOL_CLICKED = 'tool:clicked',
  TOOL_ACTIVATED = 'tool:activated',
  TOOL_DEACTIVATED = 'tool:deactivated'
}

// 预设的工具 ID
export enum EToolkitIdSystem {
  GO_TOP = 'tool:sys:go_top', // 回到顶部
  CONTACT = 'tool:sys:contact', // 联系我们
  API = 'tool:sys:api', // API Inspector
  VERSION_NEW = 'tool:sys:version:new', // 尝试新版
  VERSION_OLD = 'tool:sys:version:old' // 返回旧版
}
