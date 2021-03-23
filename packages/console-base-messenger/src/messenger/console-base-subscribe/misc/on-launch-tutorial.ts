import {
  IPayloadLaunchTutorial
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribePromiseByConsoleBase
} from '../../../util/subscribe-by-console-base';

/**
 * console-base 展示教程
 */
export default function onLaunchTutorial(fn: (payload: IPayloadLaunchTutorial) => Promise<void>): () => void {
  return subscribePromiseByConsoleBase<void, IPayloadLaunchTutorial>(EMessageBroadcastByApp.LAUNCH_TUTORIAL, fn);
}
