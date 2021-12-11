import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

/**
 * console-base 响应启用地域「全球」模式
 */
export default function onToggleRegionGlobal(fn: (payload: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.REGION_TOGGLE_GLOBAL, fn);
}
