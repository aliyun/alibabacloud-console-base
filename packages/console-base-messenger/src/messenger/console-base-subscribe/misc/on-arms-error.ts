import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadArmsError
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onArmsError(fn: (payload: IPayloadArmsError) => void): () => void {
  return subscribeByConsoleBase<IPayloadArmsError>(EMessageBroadcastByApp.ARMS_ERROR, fn);
}
