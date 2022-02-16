import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadRegionTriggerOuDetection
} from '../../../types';
import {
  broadcastByApp
} from '../../../util';

export default function triggerRegionOuDetection(payload: IPayloadRegionTriggerOuDetection): void {
  broadcastByApp<IPayloadRegionTriggerOuDetection>(EMessageBroadcastByApp.REGION_TRIGGER_OU_DETECTION, payload);
}
