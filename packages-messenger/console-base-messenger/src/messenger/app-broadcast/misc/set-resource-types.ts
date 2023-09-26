import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  TPayloadResourceTypes
} from '../../../types';

/**
 * 设置资源组类型
 */
export default function setResourceTypes(value: TPayloadResourceTypes): void {
  broadcastByApp<TPayloadResourceTypes>(EMessageBroadcastByApp.SET_RESOURCE_TYPES, value);
}