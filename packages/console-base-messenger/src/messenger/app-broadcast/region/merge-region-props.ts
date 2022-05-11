import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionProps
} from '../../../types';

/**
 * 合并组件 props
 */
export default function mergeRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_MERGE_PROPS, payload);
}
