import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../enum';
import {
  composeToolkitType
} from '../util';

/**
 * 移除工具
 */
export default function removeToolkitItem(id: string): void {
  broadcastByApp<string>(composeToolkitType(EToolkitTypeShort.REMOVE), id);
}
