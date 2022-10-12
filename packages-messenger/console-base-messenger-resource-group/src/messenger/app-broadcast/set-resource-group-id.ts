import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_ID
} from '../../const';

/**
 * 通知修改当前选择的资源组
 * 
 * @deprecated
 */
export default function setResourceGroupId(payload: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_RESOURCE_GROUP_SET_ID, payload);
}
