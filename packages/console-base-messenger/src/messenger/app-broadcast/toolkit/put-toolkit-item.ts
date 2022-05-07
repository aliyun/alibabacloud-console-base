import {
  SettingsToolkitItem
} from '@alicloud/console-base-types-settings-toolkit';
import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  EToolkitTypeShort
} from '../../../enum';
import {
  IPayloadPutTool
} from '../../../types';
import {
  composeToolkitType
} from '../../../util';

/**
 * Toolkit 添加或修改一个工具
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.putTool
 */
export default function putToolkitItem(tool: SettingsToolkitItem): void {
  broadcastByApp<IPayloadPutTool>(composeToolkitType(EToolkitTypeShort.ADD), {
    tool
  });
}
