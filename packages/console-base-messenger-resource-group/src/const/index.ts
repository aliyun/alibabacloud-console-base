export const DATA_KEY_RESOURCE_GROUP_PORTAL = 'data-console-base-resource-group-portal';

/**
 * 消息类型（不可随意修改）
 */
export const MESSAGE_TYPE_RESOURCE_GROUP_SET_PROPS = 'app_2_console_base:resource_group/set_props'; // 覆盖 props
export const MESSAGE_TYPE_RESOURCE_GROUP_MERGE_PROPS = 'app_2_console_base:resource_group/merge_props'; // 合并 props（适合需要单点更新的场景）
export const MESSAGE_TYPE_RESOURCE_GROUP_PORTAL = 'app_2_console_base:resource_group/portal';

export const MESSAGE_TYPE_RESOURCE_GROUP_TOGGLE = 'app_2_console_base:resource_group/toggle'; // TODO 杀
export const MESSAGE_TYPE_RESOURCE_GROUP_SET_ID = 'app_2_console_base:resource_group/set_id'; // TODO 杀
export const MESSAGE_TYPE_RESOURCE_GROUP_SET_RESOURCE_COUNT = 'app_2_console_base:resource_group/set_resource_count'; // TODO 杀
  
export const MESSAGE_TYPE_RESOURCE_GROUP_DATA_LOADED = 'app_2_console_base:resource_group/data_loaded'; // TODO 杀 FIXME 前缀写错了...
export const MESSAGE_TYPE_RESOURCE_GROUP_CHANGE = 'app_2_console_base:resource_group/change'; // FIXME 前缀写错了...