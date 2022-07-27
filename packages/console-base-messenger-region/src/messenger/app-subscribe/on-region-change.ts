import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionOnChange
} from '../../types';
import {
  MESSAGE_TYPE_REGION_CHANGE
} from '../../const';

/**
 * 地域切换时的回调
 */
export default function onRegionChange(fn: (payload: IPayloadRegionOnChange) => void): () => void {
  return subscribeByApp<IPayloadRegionOnChange>(MESSAGE_TYPE_REGION_CHANGE, fn);
}
