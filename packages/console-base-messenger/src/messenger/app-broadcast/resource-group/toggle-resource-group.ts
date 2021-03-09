import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util/broadcast-by-app';

/**
 * 展示或隐藏资源组
 */
export default function toggleResourceGroup(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, payload);
}
