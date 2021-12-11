import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 展示或隐藏区域选择器
 */
export default function toggleRegion(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.REGION_TOGGLE, payload);
}
