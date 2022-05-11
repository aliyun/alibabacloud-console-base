import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 展示或隐藏区域选择器
 * 
 * @deprecated
 */
export default function toggleRegion(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.REGION_TOGGLE, payload);
}
