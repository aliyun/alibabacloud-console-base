import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadResourceGroupProps
} from '../../../types';

/**
 * 合并组件 props
 */
export default function mergeResourceGroupProps(payload: IPayloadResourceGroupProps): void {
  broadcastByApp<IPayloadResourceGroupProps>(EMessageBroadcastByApp.RESOURCE_GROUP_MERGE_PROPS, payload);
}
