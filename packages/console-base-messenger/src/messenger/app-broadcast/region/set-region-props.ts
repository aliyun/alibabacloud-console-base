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
 * 覆盖 Region 组件 props
 */
export default function setRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_SET_PROPS, payload);
}
