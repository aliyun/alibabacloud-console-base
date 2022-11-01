import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionTriggerOuDetection
} from '../types';
import {
  MESSAGE_TYPE_REGION_TRIGGER_OU_DETECTION
} from '../const';

export default function triggerRegionOuDetection(regionId: string, regionName: string, commodityCode?: string): void {
  if (!regionId || !regionName) {
    return;
  }
  
  broadcastByApp<IPayloadRegionTriggerOuDetection>(MESSAGE_TYPE_REGION_TRIGGER_OU_DETECTION, {
    regionId,
    regionName,
    commodityCode
  });
}
