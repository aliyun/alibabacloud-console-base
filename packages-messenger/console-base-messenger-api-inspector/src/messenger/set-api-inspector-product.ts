import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  SET_API_INSPECTOR_PRODUCT
} from '../const';

export default function setApiInspectorProduct(payload: string): void {
  broadcastByApp<string>(SET_API_INSPECTOR_PRODUCT, payload);
}
