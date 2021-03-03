import {
  IPayloadResourceGroup
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';

/**
 * 资源组数据加载完成时的回调
 */
export default function onResourceGroupDataLoaded(fn: (payload?: IPayloadResourceGroup[]) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup[]>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, fn);
}
