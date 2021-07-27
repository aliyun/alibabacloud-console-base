import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import broadcastByConsoleBase from '../../util/broadcast-by-console-base';

/**
 * 通知控制台应用：主题已切换
 */
export default function themeChange(payload: string): void {
  broadcastByConsoleBase<string>(EMessageBroadcastByConsoleBase.THEME_CHANGE, payload);
}
