import {
  IPayloadRegionProps
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 推荐以后使用这个一次性搞定所有 props
 */
export default function setRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_SET_PROPS, payload);
}
