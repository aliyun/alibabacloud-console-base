import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  broadcastByApp
} from '../../../util';

/**
 * 设置当前产品 ID
 */
export default function setProductId(value: string): void {
  broadcastByApp<string>(EMessageBroadcastByApp.SET_PRODUCT_ID, value);
}
