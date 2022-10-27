import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_PORTAL
} from '../const';

/**
 * 应用侧的 PluginResourceGroup 的 Portal 创建或删除，在没有 PrimaryPortal 的情况下（通常顶栏不存在的情况），将组件渲染到应用
 */
export default function resourceGroupPortal(): void {
  broadcastByApp(MESSAGE_TYPE_RESOURCE_GROUP_PORTAL);
}
