import {
  IPayloadArmsError
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onArmsError(fn: (payload: IPayloadArmsError) => void): () => void {
  return subscribeByConsoleBase<IPayloadArmsError>(EMessageBroadcastByApp.ARMS_ERROR, fn);
}
