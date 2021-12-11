import {
  IPayloadArmsError
} from '../../../types';
import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastByApp
} from '../../../util';

/**
 * 通过 messenger 调用 arms 的 error
 * 
 * 我不推荐使用这种方式，但 @alicloud/console-components-intl 说要这么玩...
 * 调用 arms 推荐直接用 @alicloud/arms 下的封装
 */
export default function armsError(message: string, name?: string): void {
  broadcastByApp<IPayloadArmsError>(EMessageBroadcastByApp.ARMS_ERROR, {
    message,
    name
  });
}
