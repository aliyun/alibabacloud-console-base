import {
  SettingsToolkitItem
} from '@alicloud/console-base-types-settings-toolkit';
import {
  subscribeByConsoleBase
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../enum';
import {
  IPayloadPutTool
} from '../types';
import {
  composeToolkitType
} from '../util';

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
