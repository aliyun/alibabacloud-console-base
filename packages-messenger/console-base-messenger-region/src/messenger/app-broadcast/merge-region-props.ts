import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionProps
} from '../../types';
import {
  MESSAGE_TYPE_REGION_MERGE_PROPS
} from '../../const';

/**
 * 合并组件 props
 */
export default function mergeRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(MESSAGE_TYPE_REGION_MERGE_PROPS, payload);
}
