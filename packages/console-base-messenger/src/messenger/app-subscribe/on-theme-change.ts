import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';

/**
 * 主题切换时的回调
 */
export default function onThemeChange(fn: (payload: string) => void): () => void {
  return subscribeByApp<string>(EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}
