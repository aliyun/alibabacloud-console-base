import {
  IPayloadResourceGroupProps
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onSetResourceGroupProps(fn: (payload: IPayloadResourceGroupProps) => void): () => void {
  return subscribeByConsoleBase<IPayloadResourceGroupProps>(EMessageBroadcastByApp.RESOURCE_GROUP_SET_PROPS, fn);
}
