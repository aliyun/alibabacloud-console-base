import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionProps
} from '../types';
import {
  MESSAGE_TYPE_REGION_SET_PROPS
} from '../const';

/**
 * 覆盖组件 props
 */
export default function setRegionProps(payload: IPayloadRegionProps): void {
  broadcastByApp<IPayloadRegionProps>(MESSAGE_TYPE_REGION_SET_PROPS, payload);
}
