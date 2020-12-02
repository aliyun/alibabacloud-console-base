import { EMessageBroadcastByApp } from '../../const';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 展示或隐藏资源组
 */

export default function toggleResourceGroup() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  broadcastByApp(EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, payload);
}