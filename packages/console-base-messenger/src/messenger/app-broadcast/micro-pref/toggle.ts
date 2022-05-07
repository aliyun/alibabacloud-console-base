import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 通过 messenger 打开「微偏好」面板
 */
export default function toggleMicroPref(visible = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.MICRO_PREF_TOGGLE, visible);
}
