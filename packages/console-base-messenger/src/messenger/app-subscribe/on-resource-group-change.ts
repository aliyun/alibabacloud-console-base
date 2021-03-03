import {
  IPayloadResourceGroup
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';

/**
 * 资源组切换时的回调
 */
export default function onResourceGroupChange(fn: (payload?: IPayloadResourceGroup | null) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup | null>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_CHANGE, fn);
}
