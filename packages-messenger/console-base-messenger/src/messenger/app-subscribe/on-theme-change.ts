import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../enum';

/**
 * 主题切换时的回调
 */
export default function onThemeChange(fn: (payload: string) => void): () => void {
  return subscribeByApp<string>(EMessageBroadcastByConsoleBase.THEME_CHANGE, fn);
}
