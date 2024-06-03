import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  TPayloadResourceTypes
} from '../../../types';

export default function onSetResourceTypes(fn: (payload: TPayloadResourceTypes) => void): () => void {
  return subscribeByConsoleBase<TPayloadResourceTypes>(EMessageBroadcastByApp.SET_RESOURCE_TYPES, payload => {
    fn(payload);
  });
}