import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  IPayloadRegionTriggerOuDetection
} from '../../types';
import {
  MESSAGE_TYPE_REGION_TRIGGER_OU_DETECTION
} from '../../const';

export default function onTriggerRegionOuDetection(fn: (regionId: string, regionName: string, commodityCode?: string) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionTriggerOuDetection>(MESSAGE_TYPE_REGION_TRIGGER_OU_DETECTION, payload => {
    if (payload.regionId && payload.regionName) {
      fn(payload.regionId, payload.regionName, payload.commodityCode);
    }
  });
}
