import {
  EMessageBroadcastByApp
} from '../../../const';
import subscribeByConsoleBase from '../../../util/subscribe-by-console-base';

/**
 * console-base 响应设置地域 ID
 */
export default function onSetRegionId(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.REGION_SET_ID, fn);
}
