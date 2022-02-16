import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 通知修改当前选择的资源组
 * 
 * @deprecated
 */
export default function setResourceGroupId(payload: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_ID, payload);
}
