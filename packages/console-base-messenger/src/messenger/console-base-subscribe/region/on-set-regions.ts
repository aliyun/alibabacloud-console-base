import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegion
} from '../../../types';

/**
 * console-base 响应设置地域列表
 */
export default function onSetRegions(fn: (payload: IPayloadRegion[]) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegion[]>(EMessageBroadcastByApp.REGION_SET_REGIONS, fn);
}
