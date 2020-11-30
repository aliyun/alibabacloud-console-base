import {
  IPayloadResourceGroup
} from '../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../const';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';

/**
 * 通知控制台应用：资源组组件数据加载完成
 */
export default function resourceGroupDataLoaded(payload: IPayloadResourceGroup[]): void {
  broadcastByConsoleBase<IPayloadResourceGroup[]>(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, payload);
}
