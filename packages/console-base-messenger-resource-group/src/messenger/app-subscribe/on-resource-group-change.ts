import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroup
} from '../../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_CHANGE
} from '../../const';

/**
 * 资源组切换时的回调
 */
export default function onResourceGroupChange(fn: (payload: IPayloadResourceGroup | null) => void): () => void {
  return subscribeByApp<IPayloadResourceGroup | null>(MESSAGE_TYPE_RESOURCE_GROUP_CHANGE, fn);
}
