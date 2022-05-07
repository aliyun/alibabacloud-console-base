import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadRegionOnChange
} from '../../../types';

/**
 * 地域切换时的回调
 */
export default function onRegionChange(fn: (payload: IPayloadRegionOnChange) => void): () => void {
  return subscribeByApp<IPayloadRegionOnChange>(EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}
