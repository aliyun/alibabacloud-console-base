import {
  broadcastByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadResourceGroup
} from '../../types';
import {
  MESSAGE_TYPE_RESOURCE_GROUP_DATA_LOADED
} from '../../const';

/**
 * 通知控制台应用：资源组组件数据加载完成
 */
export default function resourceGroupDataLoaded(payload: IPayloadResourceGroup[]): void {
  broadcastByConsoleBase<IPayloadResourceGroup[]>(MESSAGE_TYPE_RESOURCE_GROUP_DATA_LOADED, payload);
}
