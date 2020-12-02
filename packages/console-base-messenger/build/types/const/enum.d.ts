/**
 * 控制台应用发给 console-base 的消息类型（不可随意修改）
 *
 * 前缀一般为 `app_2_console_base:`
 */
export declare enum EMessageBroadcastByApp {
    PROMPT_ERROR = "app_2_console_base:prompt_error",
    FETCHER_REQUEST = "app_2_console_base:fetcher_request",
    TOGGLE_TOP_NAV = "app_2_console_base:top_nav/toggle",
    LAUNCH_TUTORIAL = "app_2_console_base:launch_tutorial",
    LAUNCH_WIDGET = "app_2_console_base:launch_widget",
    REGION_TOGGLE = "app_2_console_base:region/toggle",
    REGION_TOGGLE_GLOBAL = "app_2_console_base:region/toggle_global",
    REGION_SET_ID = "app_2_console_base:region/set_id",
    REGION_SET_REGIONS = "app_2_console_base:region/set_regions",
    REGION_SET_REGION_GROUPS = "app_2_console_base:region/set_region_groups",
    REGION_SET_RESOURCE_COUNT = "app_2_console_base:region/set_resource_count",
    RESOURCE_GROUP_TOGGLE = "app_2_console_base:resource_group/toggle",
    RESOURCE_GROUP_SET_ID = "app_2_console_base:resource_group/set_id",
    RESOURCE_GROUP_SET_RESOURCE_COUNT = "app_2_console_base:resource_group/set_resource_count"
}
/**
 * ConsoleBase 通知外部应用的消息类型（不可随意修改）
 *
 * 前缀一般为 `console_base_2_app:`
 */
export declare enum EMessageBroadcastByConsoleBase {
    READY = "console_base_2_app:ready",
    REGION_CHANGE = "console_base_2_app:region/change",
    REGION_REFRESH_RESOURCE_COUNT = "console_base_2_app:region/refresh_resource_count",
    RESOURCE_GROUP_DATA_LOADED = "app_2_console_base:resource_group/data_loaded",
    RESOURCE_GROUP_CHANGE = "app_2_console_base:resource_group/change",
    FASTBUY_CLOSE = "console_base_2_app:fastbuy/close",
    FASTBUY_BUY = "console_base_2_app:fastbuy/buy",
    FASTBUY_SUBMIT_PAYMENT = "console_base_2_app:fastbuy/submit_payment",
    FASTBUY_ORDER_FINISH = "console_base_2_app:fastbuy/order_finish"
}
export declare enum EToolkitTypeShort {
    SET_GO_TOP_CONTAINER = "go_top:set_container",
    ADD = "add",
    REMOVE = "remove",
    TOOL_CLICKED = "tool:clicked",
    TOOL_ACTIVATED = "tool:activated",
    TOOL_DEACTIVATED = "tool:deactivated"
}
export declare enum EToolkitIdSystem {
    GO_TOP = "tool:sys:go_top",
    CONTACT = "tool:sys:contact",
    API = "tool:sys:api",
    VERSION_NEW = "tool:sys:version:new",
    VERSION_OLD = "tool:sys:version:old"
}
