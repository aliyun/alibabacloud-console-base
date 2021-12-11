import {
  EToolkitTypeShort
} from '../../../const';
import {
  composeToolkitType,
  broadcastByApp
} from '../../../util';

/**
 * 移除工具
 */
export default function removeToolkitItem(id: string): void {
  broadcastByApp<string>(composeToolkitType(EToolkitTypeShort.REMOVE), id);
}
