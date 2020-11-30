import {
  EToolkitIdSystem
} from '../../const';

import onToolkitItemClick from './on-toolkit-item-click';

/**
 * 「体验新版」工具点击时的回调
 * 
 * 原 @alicloud/console-base-sdk-toolkit messenger.subscribeClickedVersionNew
 */
/**
 * 「返回旧版」工具点击时的回调
 * 
 * 原 @alicloud/console-base-sdk-toolkit messenger.subscribeClickedVersionOld
 */
export default function onToolkitVersionOldClick(fn: () => void): () => void {
  return onToolkitItemClick(EToolkitIdSystem.VERSION_OLD, fn);
}
