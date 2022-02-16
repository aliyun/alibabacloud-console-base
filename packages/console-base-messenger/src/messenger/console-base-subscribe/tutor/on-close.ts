import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onOpenTutor(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(EMessageBroadcastByApp.TUTOR_CLOSE, fn);
}
