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
 * 合并组件 props
 */
export default function mergeRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_MERGE_PROPS, payload);
}
