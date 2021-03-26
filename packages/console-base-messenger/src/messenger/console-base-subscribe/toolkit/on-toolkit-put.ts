import {
  SettingsToolkitItem
} from '@alicloud/console-base-types-settings-toolkit';

import {
  IPayloadPutTool
} from '../../../types';
import {
  EToolkitTypeShort
} from '../../../const';
import subscribeByConsoleBase from '../../../util/subscribe-by-console-base';
import composeToolkitType from '../../../util/compose-toolkit-type';

/**
 * console-base 响应动态添加或修改某工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribePutTool
 */
export default function onToolkitPut(fn: (tool: SettingsToolkitItem) => void): () => void {
  return subscribeByConsoleBase<IPayloadPutTool>(composeToolkitType(EToolkitTypeShort.ADD), payload => {
    if (fn && payload?.tool) {
      fn(payload.tool);
    }
  });
}
