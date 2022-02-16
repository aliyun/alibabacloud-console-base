import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadResourceGroup
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

/**
 * 资源组切换时的回调
 */
export default function onResourceGroupChange(fn: (payload: IPayloadResourceGroup | null) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup | null>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, fn);
}
