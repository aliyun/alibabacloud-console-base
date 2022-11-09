import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegion
} from '../types';
import {
  MESSAGE_TYPE_REGION_SET_REGIONS
} from '../const';

/**
 * console-base 响应设置地域列表
 */
export default function onSetRegions(fn: (payload: IPayloadRegion[]) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegion[]>(MESSAGE_TYPE_REGION_SET_REGIONS, fn);
}
