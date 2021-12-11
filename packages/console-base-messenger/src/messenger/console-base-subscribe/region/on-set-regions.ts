import {
  IPayloadRegion
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

/**
 * console-base 响应设置地域列表
 */
export default function onSetRegions(fn: (payload: IPayloadRegion[]) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegion[]>(EMessageBroadcastByApp.REGION_SET_REGIONS, fn);
}
