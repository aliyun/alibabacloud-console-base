import {
  EMessageBroadcastByApp
} from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';

/**
 * console-base 响应隐藏/展示 TopNav
 */
export default function onToggleTopNav(fn: (payload?: boolean) => void): () => void {
  return subscribeByConsoleBase<boolean>(EMessageBroadcastByApp.TOGGLE_TOP_NAV, fn);
}
