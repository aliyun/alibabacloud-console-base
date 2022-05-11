import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../enum';

/**
 * 通知控制台应用：主题已切换
 */
export default function themeChange(payload: string): void {
  broadcastByConsoleBase<string>(EMessageBroadcastByConsoleBase.THEME_CHANGE, payload);
}
