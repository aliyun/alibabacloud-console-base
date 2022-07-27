import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionProps
} from '../../types';
import {
  MESSAGE_TYPE_REGION_MERGE_PROPS
} from '../../const';

export default function onMergeRegionProps(fn: (payload: IPayloadRegionProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionProps>(MESSAGE_TYPE_REGION_MERGE_PROPS, fn);
}
