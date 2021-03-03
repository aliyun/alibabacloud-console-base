import {
  IPayloadRegionOnChange
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';

/**
 * 地域切换时的回调
 */
export default function onRegionChange(fn: (payload?: IPayloadRegionOnChange) => void): () => void {
  return subscribeByApp<IPayloadRegionOnChange>(EMessageBroadcastByConsoleBase.REGION_CHANGE, fn);
}
