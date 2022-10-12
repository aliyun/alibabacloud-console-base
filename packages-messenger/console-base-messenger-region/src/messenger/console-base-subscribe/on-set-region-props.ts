import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionProps
} from '../../types';
import {
  MESSAGE_TYPE_REGION_SET_PROPS
} from '../../const';

export default function onSetRegionProps(fn: (payload: IPayloadRegionProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionProps>(MESSAGE_TYPE_REGION_SET_PROPS, fn);
}
