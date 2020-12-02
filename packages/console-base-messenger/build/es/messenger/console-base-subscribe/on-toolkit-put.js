import { EToolkitTypeShort } from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
import composeToolkitType from '../../util/compose-toolkit-type';
/**
 * console-base 响应动态添加或修改某工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribePutTool
 */

export default function onToolkitPut(fn) {
  return subscribeByConsoleBase(composeToolkitType(EToolkitTypeShort.ADD), function (payload) {
    if (fn && payload !== null && payload !== void 0 && payload.tool) {
      fn(payload.tool);
    }
  });
}