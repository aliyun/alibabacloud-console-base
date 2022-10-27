import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroup
} from '../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_DATA_LOADED
} from '../const';

/**
 * 资源组数据加载完成时的回调
 * 
 * @deprecated 不要用
 */
export default function onResourceGroupDataLoaded(fn: (payload: IPayloadResourceGroup[]) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup[]>(MESSAGE_TYPE_RESOURCE_GROUP_DATA_LOADED, fn);
}
