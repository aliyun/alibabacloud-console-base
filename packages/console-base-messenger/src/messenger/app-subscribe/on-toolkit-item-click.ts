import subscribeByApp from '../../util/subscribe-by-app';
import {
  EToolkitTypeShort
} from '../../const';
import {
  composeToolkitTypeWithId
} from '../../util/compose-toolkit-type';

/**
 * 某工具的「点击」的回调
 * 
 * 原 @alicloud/console-base-sdk-toolkit messenger.subscribeClicked
 */
export default function onToolkitItemClick(id: string, fn: () => void): () => void {
  return subscribeByApp(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_CLICKED, id), fn);
}
