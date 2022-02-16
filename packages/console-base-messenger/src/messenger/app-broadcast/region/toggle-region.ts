import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 展示或隐藏区域选择器
 * 
 * @deprecated
 */
export default function toggleRegion(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.REGION_TOGGLE, payload);
}
