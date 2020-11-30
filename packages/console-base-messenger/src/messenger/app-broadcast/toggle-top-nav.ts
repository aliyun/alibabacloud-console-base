import {
  EMessageBroadcastByApp
} from '../../const';
import {
  broadcastByApp
} from '../../util/broadcast-by-app';

/**
 * 展示或隐藏顶部导航
 */
export default function toggleTopNav(payload: boolean): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.TOGGLE_TOP_NAV, payload);
}
