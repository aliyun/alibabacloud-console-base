import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroupProps
} from '../../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_PROPS
} from '../../const';

/**
 * 覆盖组件 props
 */
export default function setResourceGroupProps(payload: IPayloadResourceGroupProps): void {
  broadcastByApp<IPayloadResourceGroupProps>(MESSAGE_TYPE_RESOURCE_GROUP_SET_PROPS, payload);
}
