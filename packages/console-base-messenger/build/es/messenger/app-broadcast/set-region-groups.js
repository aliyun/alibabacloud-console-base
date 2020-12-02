import { EMessageBroadcastByApp } from '../../const';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 动态修改可用地域分组列表
 */

export default function setRegions(payload) {
  broadcastByApp(EMessageBroadcastByApp.REGION_SET_REGION_GROUPS, payload);
}