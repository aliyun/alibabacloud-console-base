import subscribeByApp from '../../util/subscribe-by-app';
import {
  EToolkitTypeShort
} from '../../const';
import {
  composeToolkitTypeWithId
} from '../../util/compose-toolkit-type';

/**
 * 某工具的「激活」时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeActivated + subscribeDeactivated
 */
export default function onToolkitItemActiveChange(id: string, fn: (active?: boolean) => void): () => void {
  return subscribeByApp(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_ACTIVATED, id), fn);
}
