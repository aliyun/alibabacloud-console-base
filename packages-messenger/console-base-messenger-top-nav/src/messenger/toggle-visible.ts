import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_TOGGLE_VISIBLE
} from '../const';

/**
 * 显示隐藏顶栏
 */
export default function toggleVisible(payload = true): void {
  broadcastByApp<boolean>(MESSAGE_TYPE_TOGGLE_VISIBLE, payload);
}
