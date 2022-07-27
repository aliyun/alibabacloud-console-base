import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroupProps
} from '../../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_MERGE_PROPS
} from '../../const';

/**
 * 合并组件 props
 */
export default function mergeResourceGroupProps(payload: IPayloadResourceGroupProps): void {
  broadcastByApp<IPayloadResourceGroupProps>(MESSAGE_TYPE_RESOURCE_GROUP_MERGE_PROPS, payload);
}
