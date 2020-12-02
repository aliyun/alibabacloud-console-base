/**
 * 控制台应用发给 console-base 的消息类型（不可随意修改）
 * 
 * 前缀一般为 `app_2_console_base:`
 */
export var EMessageBroadcastByApp;
/**
 * ConsoleBase 通知外部应用的消息类型（不可随意修改）
 * 
 * 前缀一般为 `console_base_2_app:`
 */

(function (EMessageBroadcastByApp) {
  EMessageBroadcastByApp["PROMPT_ERROR"] = "app_2_console_base:prompt_error";
  EMessageBroadcastByApp["FETCHER_REQUEST"] = "app_2_console_base:fetcher_request";
  EMessageBroadcastByApp["TOGGLE_TOP_NAV"] = "app_2_console_base:top_nav/toggle";
  EMessageBroadcastByApp["LAUNCH_TUTORIAL"] = "app_2_console_base:launch_tutorial";
  EMessageBroadcastByApp["LAUNCH_WIDGET"] = "app_2_console_base:launch_widget";
  EMessageBroadcastByApp["REGION_TOGGLE"] = "app_2_console_base:region/toggle";
  EMessageBroadcastByApp["REGION_TOGGLE_GLOBAL"] = "app_2_console_base:region/toggle_global";
  EMessageBroadcastByApp["REGION_SET_ID"] = "app_2_console_base:region/set_id";
  EMessageBroadcastByApp["REGION_SET_REGIONS"] = "app_2_console_base:region/set_regions";
  EMessageBroadcastByApp["REGION_SET_REGION_GROUPS"] = "app_2_console_base:region/set_region_groups";
  EMessageBroadcastByApp["REGION_SET_RESOURCE_COUNT"] = "app_2_console_base:region/set_resource_count";
  EMessageBroadcastByApp["RESOURCE_GROUP_TOGGLE"] = "app_2_console_base:resource_group/toggle";
  EMessageBroadcastByApp["RESOURCE_GROUP_SET_ID"] = "app_2_console_base:resource_group/set_id";
  EMessageBroadcastByApp["RESOURCE_GROUP_SET_RESOURCE_COUNT"] = "app_2_console_base:resource_group/set_resource_count";
})(EMessageBroadcastByApp || (EMessageBroadcastByApp = {}));

export var EMessageBroadcastByConsoleBase;

(function (EMessageBroadcastByConsoleBase) {
  EMessageBroadcastByConsoleBase["READY"] = "console_base_2_app:ready";
  EMessageBroadcastByConsoleBase["REGION_CHANGE"] = "console_base_2_app:region/change";
  EMessageBroadcastByConsoleBase["REGION_REFRESH_RESOURCE_COUNT"] = "console_base_2_app:region/refresh_resource_count";
  EMessageBroadcastByConsoleBase["RESOURCE_GROUP_DATA_LOADED"] = "app_2_console_base:resource_group/data_loaded";
  EMessageBroadcastByConsoleBase["RESOURCE_GROUP_CHANGE"] = "app_2_console_base:resource_group/change";
  EMessageBroadcastByConsoleBase["FASTBUY_CLOSE"] = "console_base_2_app:fastbuy/close";
  EMessageBroadcastByConsoleBase["FASTBUY_BUY"] = "console_base_2_app:fastbuy/buy";
  EMessageBroadcastByConsoleBase["FASTBUY_SUBMIT_PAYMENT"] = "console_base_2_app:fastbuy/submit_payment";
  EMessageBroadcastByConsoleBase["FASTBUY_ORDER_FINISH"] = "console_base_2_app:fastbuy/order_finish";
})(EMessageBroadcastByConsoleBase || (EMessageBroadcastByConsoleBase = {}));

export var EToolkitTypeShort; // 预设的工具 ID

(function (EToolkitTypeShort) {
  EToolkitTypeShort["SET_GO_TOP_CONTAINER"] = "go_top:set_container";
  EToolkitTypeShort["ADD"] = "add";
  EToolkitTypeShort["REMOVE"] = "remove";
  EToolkitTypeShort["TOOL_CLICKED"] = "tool:clicked";
  EToolkitTypeShort["TOOL_ACTIVATED"] = "tool:activated";
  EToolkitTypeShort["TOOL_DEACTIVATED"] = "tool:deactivated";
})(EToolkitTypeShort || (EToolkitTypeShort = {}));

export var EToolkitIdSystem;

(function (EToolkitIdSystem) {
  EToolkitIdSystem["GO_TOP"] = "tool:sys:go_top";
  EToolkitIdSystem["CONTACT"] = "tool:sys:contact";
  EToolkitIdSystem["API"] = "tool:sys:api";
  EToolkitIdSystem["VERSION_NEW"] = "tool:sys:version:new";
  EToolkitIdSystem["VERSION_OLD"] = "tool:sys:version:old";
})(EToolkitIdSystem || (EToolkitIdSystem = {}));