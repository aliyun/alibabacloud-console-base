import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';

/**
 * 修改当前选中的地域
 * 
 * @deprecated
 */
export default function setRegionId(payload: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.REGION_SET_ID, payload);
}
