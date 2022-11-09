import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_REGION_SET_ID
} from '../const';

/**
 * 修改当前选中的地域
 * 
 * @deprecated
 */
export default function setRegionId(payload: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_REGION_SET_ID, payload);
}
