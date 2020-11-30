import {
  EMessageBroadcastByApp
} from '../../const';
import {
  broadcastByApp
} from '../../util/broadcast-by-app';

/**
 * 修改当前选中的地域
 */
export default function setRegionId(payload: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.REGION_SET_ID, payload);
}
