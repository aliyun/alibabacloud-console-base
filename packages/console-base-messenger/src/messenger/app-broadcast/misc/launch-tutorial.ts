import {
  IPayloadLaunchTutorial
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastPromiseByApp
} from '../../../util';

/**
 * 打开教程
 */
export default function launchTutorial(payload: IPayloadLaunchTutorial): Promise<void> {
  return broadcastPromiseByApp<void, IPayloadLaunchTutorial>(EMessageBroadcastByApp.LAUNCH_TUTORIAL, payload);
}
