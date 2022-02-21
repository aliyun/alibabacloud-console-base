import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionProps
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onMergeRegionProps(fn: (payload: IPayloadRegionProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionProps>(EMessageBroadcastByApp.REGION_MERGE_PROPS, fn);
}