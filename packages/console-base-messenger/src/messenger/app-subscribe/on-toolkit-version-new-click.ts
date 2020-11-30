import {
  EToolkitIdSystem
} from '../../const';

import onToolkitItemClick from './on-toolkit-item-click';

/**
 * 「体验新版」工具点击时的回调
 * 
 * 原 @alicloud/console-base-sdk-toolkit messenger.subscribeClickedVersionNew
 */
export default function onToolkitVersionNewClick(fn: () => void): () => void {
  return onToolkitItemClick(EToolkitIdSystem.VERSION_NEW, fn);
}
