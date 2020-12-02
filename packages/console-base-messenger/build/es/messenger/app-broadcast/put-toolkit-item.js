import { EToolkitTypeShort } from '../../const';
import composeToolkitType from '../../util/compose-toolkit-type';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * Toolkit 添加或修改一个工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.putTool
 */

export default function putToolkitItem(tool) {
  broadcastByApp(composeToolkitType(EToolkitTypeShort.ADD), {
    tool: tool
  });
}