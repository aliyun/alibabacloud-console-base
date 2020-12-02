import { EToolkitTypeShort } from '../../const';
import composeToolkitType from '../../util/compose-toolkit-type';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
/**
 * console-base 响应动态移除某工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeRemoveTool
 */

export default function onToolkitRemove(fn) {
  return subscribeByConsoleBase(composeToolkitType(EToolkitTypeShort.REMOVE), function (id) {
    if (id && fn) {
      fn(id);
    }
  });
}