import { EMessageBroadcastByApp } from '../../const';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 设置地域选择器展示成「全球」或取消此设置（payload = false 的时候）
 */

export default function toggleRegionGlobal() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  broadcastByApp(EMessageBroadcastByApp.REGION_TOGGLE_GLOBAL, payload);
}