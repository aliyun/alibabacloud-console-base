import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadResourceGroupProps
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onMergeResourceGroupProps(fn: (payload: IPayloadResourceGroupProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadResourceGroupProps>(EMessageBroadcastByApp.RESOURCE_GROUP_MERGE_PROPS, fn);
}
