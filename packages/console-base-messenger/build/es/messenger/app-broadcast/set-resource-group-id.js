import { EMessageBroadcastByApp } from '../../const';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 通知修改当前选择的资源组
 */

export default function setResourceGroupId(payload) {
  broadcastByApp(EMessageBroadcastByApp.RESOURCE_GROUP_SET_ID, payload);
}