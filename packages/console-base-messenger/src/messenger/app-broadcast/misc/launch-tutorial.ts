import {
  IPayloadLaunchTutorial
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastPromiseByApp
} from '../../../util/broadcast-by-app';

/**
 * 打开教程
 */
export default function launchTutorial(payload: IPayloadLaunchTutorial): Promise<void> {
  return broadcastPromiseByApp<void, IPayloadLaunchTutorial>(EMessageBroadcastByApp.LAUNCH_TUTORIAL, payload);
}
