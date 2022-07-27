import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_MICRO_PREF_TOGGLE
} from '../../const';

/**
 * 通过 messenger 打开「微偏好」面板
 */
export default function toggleMicroPref(visible = true): void {
  broadcastByApp<boolean>(MESSAGE_TYPE_MICRO_PREF_TOGGLE, visible);
}
