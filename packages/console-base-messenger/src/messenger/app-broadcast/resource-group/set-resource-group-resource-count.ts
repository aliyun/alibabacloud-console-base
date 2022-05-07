import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 动态设置各资源组下的资源数
 * 
 * @deprecated
 */
export default function setResourceGroupResourceCount(payload: Record<string, number>): void {
  broadcastByApp<Record<string, number>>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, payload);
}
