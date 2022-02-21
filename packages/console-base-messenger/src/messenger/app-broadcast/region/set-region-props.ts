import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionProps
} from '../../../types';
import {
  broadcastByApp
} from '../../../util';

/**
 * 覆盖组件 props
 */
export default function setRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_SET_PROPS, payload);
}