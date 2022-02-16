import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadLaunchTutorial
} from '../../../types';
import {
  subscribePromiseByConsoleBase
} from '../../../util';

/**
 * console-base 展示教程
 */
export default function onLaunchTutorial(fn: (payload: IPayloadLaunchTutorial) => Promise<void>): () => void {
  return subscribePromiseByConsoleBase<void, IPayloadLaunchTutorial>(EMessageBroadcastByApp.LAUNCH_TUTORIAL, fn);
}
