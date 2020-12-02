import { EMessageBroadcastByApp } from '../../const';
import { subscribePromiseByConsoleBase } from '../../util/subscribe-by-console-base';
/**
 * console-base 展示教程
 */

export default function onLaunchTutorial(fn) {
  return subscribePromiseByConsoleBase(EMessageBroadcastByApp.LAUNCH_TUTORIAL, fn);
}