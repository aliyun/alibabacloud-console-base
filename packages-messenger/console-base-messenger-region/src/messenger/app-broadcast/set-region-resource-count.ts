import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionResourceCount
} from '../../types';
import {
  MESSAGE_TYPE_REGION_SET_RESOURCE_COUNT
} from '../../const';

/**
 * 动态设置各个地域下的资源数
 * 
 * @deprecated
 */
export default function setRegionResourceCount(payload: IPayloadRegionResourceCount): void {
  broadcastByApp<IPayloadRegionResourceCount>(MESSAGE_TYPE_REGION_SET_RESOURCE_COUNT, payload);
}
