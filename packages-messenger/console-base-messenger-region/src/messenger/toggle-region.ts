import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_TOGGLE
} from '../const';

/**
 * 展示或隐藏区域选择器
 * 
 * @deprecated
 */
export default function toggleRegion(payload = true): void {
  broadcastByApp<boolean>(MESSAGE_TYPE_REGION_TOGGLE, payload);
}
