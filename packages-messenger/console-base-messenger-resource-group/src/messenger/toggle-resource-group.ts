import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_TOGGLE
} from '../const';

/**
 * 展示或隐藏资源组
 * 
 * @deprecated
 */
export default function toggleResourceGroup(payload = true): void {
  broadcastByApp<boolean>(MESSAGE_TYPE_RESOURCE_GROUP_TOGGLE, payload);
}
