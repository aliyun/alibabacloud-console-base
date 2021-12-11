import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 动态设置各资源组下的资源数
 */
export default function setResourceGroupResourceCount(payload: Record<string, number>): void {
  broadcastByApp<Record<string, number>>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, payload);
}
