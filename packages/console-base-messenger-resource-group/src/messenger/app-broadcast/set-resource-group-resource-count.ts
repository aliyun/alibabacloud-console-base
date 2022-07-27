import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_RESOURCE_COUNT
} from '../../const';

/**
 * 动态设置各资源组下的资源数
 * 
 * @deprecated
 */
export default function setResourceGroupResourceCount(payload: Record<string, number>): void {
  broadcastByApp<Record<string, number>>(MESSAGE_TYPE_RESOURCE_GROUP_SET_RESOURCE_COUNT, payload);
}
