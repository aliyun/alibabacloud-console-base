import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 展示或隐藏顶部导航
 */
export default function toggleTopNav(payload: boolean): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.TOGGLE_TOP_NAV, payload);
}
