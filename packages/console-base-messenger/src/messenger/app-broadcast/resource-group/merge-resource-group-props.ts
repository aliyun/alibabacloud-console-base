import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadResourceGroupProps
} from '../../../types';
import {
  broadcastByApp
} from '../../../util';

/**
 * 合并组件 props
 */
export default function mergeResourceGroupProps(payload: IPayloadResourceGroupProps): void {
  broadcastByApp<IPayloadResourceGroupProps>(EMessageBroadcastByApp.RESOURCE_GROUP_MERGE_PROPS, payload);
}
