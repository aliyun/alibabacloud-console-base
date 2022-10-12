import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 设置当前产品 ID
 */
export default function setProductId(value: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.SET_PRODUCT_ID, value);
}
