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
 * 资源组数据加载完成时的回调
 * 
 * @deprecated 不要用
 */
export default function onResourceGroupDataLoaded(fn: (payload: IPayloadResourceGroup[]) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup[]>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, fn);
}
