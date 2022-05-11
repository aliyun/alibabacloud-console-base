import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionTriggerOuDetection
} from '../../../types';

export default function triggerRegionOuDetection(regionId: string, regionName: string, commodityCode?: string): void {
  if (!regionId || !regionName) {
    return;
  }
  
  broadcastByApp<IPayloadRegionTriggerOuDetection>(EMessageBroadcastByApp.REGION_TRIGGER_OU_DETECTION, {
    regionId,
    regionName,
    commodityCode
  });
}
