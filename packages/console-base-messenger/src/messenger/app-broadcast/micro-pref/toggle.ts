import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 通过 messenger 打开「微偏好」面板
 */
export default function toggleMicroPref(visible = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.MICRO_PREF_TOGGLE, visible);
}
