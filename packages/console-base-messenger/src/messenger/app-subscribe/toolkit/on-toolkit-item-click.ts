import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitTypeWithId
} from '../../../util';

/**
 * 某工具的「点击」的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClicked
 */
export default function onToolkitItemClick(id: string, fn: () => void): () => void {
  return subscribeByApp(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_CLICKED, id), fn);
}