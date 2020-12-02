import { EMessageBroadcastByApp } from '../../const';
import { broadcastPromiseByApp } from '../../util/broadcast-by-app';
/**
 * 打开教程
 */

export default function launchTutorial(payload) {
  return broadcastPromiseByApp(EMessageBroadcastByApp.LAUNCH_TUTORIAL, payload);
}