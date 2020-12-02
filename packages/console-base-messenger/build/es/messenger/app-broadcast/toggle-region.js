import { EMessageBroadcastByApp } from '../../const';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 展示或隐藏区域选择器
 */

export default function toggleRegion() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  broadcastByApp(EMessageBroadcastByApp.REGION_TOGGLE, payload);
}