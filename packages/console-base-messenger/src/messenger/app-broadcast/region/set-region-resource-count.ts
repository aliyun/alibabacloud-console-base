import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 动态设置各个地域下的资源数
 * 
 * @deprecated
 */
export default function setRegionResourceCount(payload: Record<string, number>): void {
  broadcastByApp<Record<string, number>>(EMessageBroadcastByApp.REGION_SET_RESOURCE_COUNT, payload);
}
