import {
  IPayloadRegionProps
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

/**
 * TOD 鼓励只用它
 */
export default function onSetRegionProps(fn: (payload: IPayloadRegionProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_SET_PROPS, fn);
}
