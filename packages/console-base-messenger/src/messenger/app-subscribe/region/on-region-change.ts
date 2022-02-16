import {
  EMessageBroadcastByConsoleBase
} from '../../../enum';
import {
  IPayloadRegionOnChange
} from '../../../types';
import {
  subscribeByApp
} from '../../../util';

/**
 * 地域切换时的回调
 */
export default function onRegionChange(fn: (payload: IPayloadRegionOnChange) => void): () => void {
  return subscribeByApp<IPayloadRegionOnChange>(EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}
