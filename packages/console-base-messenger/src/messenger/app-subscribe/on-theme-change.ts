import {
  EMessageBroadcastByConsoleBase
} from '../../enum';
import {
  subscribeByApp
} from '../../util';

/**
 * 主题切换时的回调
 */
export default function onThemeChange(fn: (payload: string) => void): () => void {
  return subscribeByApp<string>(EMessageBroadcastByConsoleBase.THEME_CHANGE, fn);
}
