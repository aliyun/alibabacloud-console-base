import {
  EMessageBroadcastByApp
} from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';

/**
 * console-base 响应隐藏/展示地域选择器
 */
export default function onToggleRegion(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.REGION_TOGGLE, fn);
}
