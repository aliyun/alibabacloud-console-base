import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionTriggerOuDetection
} from '../../../types';
import {
  subscribeByConsoleBase
} from '../../../util';

export default function onTriggerRegionOuDetection(fn: (regionId: string, regionName: string, commodityCode?: string) => void): () => void {
  return subscribeByConsoleBase<IPayloadRegionTriggerOuDetection>(EMessageBroadcastByApp.REGION_TRIGGER_OU_DETECTION, payload => {
    if (payload.regionId && payload.regionName) {
      fn(payload.regionId, payload.regionName, payload.commodityCode);
    }
  });
}
