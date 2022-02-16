import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 设置地域选择器展示成「全球」或取消此设置（payload = false 的时候）
 * 
 * @deprecated
 */
export default function toggleRegionGlobal(payload = true): void {
  broadcastByApp<boolean>(EMessageBroadcastByApp.REGION_TOGGLE_GLOBAL, payload);
}
