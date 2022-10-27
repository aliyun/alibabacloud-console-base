import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroupProps
} from '../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_SET_PROPS
} from '../const';

export default function onSetResourceGroupProps(fn: (payload: IPayloadResourceGroupProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadResourceGroupProps>(MESSAGE_TYPE_RESOURCE_GROUP_SET_PROPS, fn);
}
