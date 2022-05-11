import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadResourceGroup
} from '../../../types';

/**
 * 资源组切换时的回调
 */
export default function onResourceGroupChange(fn: (payload: IPayloadResourceGroup | null) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup | null>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, fn);
}
