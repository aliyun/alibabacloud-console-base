import {
  EToolkitTypeShort
} from '../../const';
import {
  composeToolkitTypeWithId
} from '../../util/compose-toolkit-type';
import broadcastByConsoleBase from '../../util/boradcast-by-console-base';

/**
 * 通知控制台应用：某工具被激活或取消激活
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastActivated + broadcastDeactivated
 */
export default function toolkitToolActiveChanged(id: string, payload: boolean): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_ACTIVATED, id), payload);
}
