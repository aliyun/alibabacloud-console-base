import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadArmsError
} from '../../../types';

export default function onArmsError(fn: (payload: IPayloadArmsError) => void): () => void {
  return subscribeByConsoleBase<IPayloadArmsError>(EMessageBroadcastByApp.ARMS_ERROR, fn);
}
