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
 * 覆盖组件 props
 */
export default function setResourceGroupProps(payload: IPayloadResourceGroupProps): void {
  broadcastByApp<IPayloadResourceGroupProps>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_PROPS, payload);
}
