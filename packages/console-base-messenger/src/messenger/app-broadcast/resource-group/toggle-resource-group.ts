import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 展示或隐藏资源组
 * 
 * @deprecated
 */
export default function toggleResourceGroup(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.RESOURCE_GROUP_TOGGLE, payload);
}
