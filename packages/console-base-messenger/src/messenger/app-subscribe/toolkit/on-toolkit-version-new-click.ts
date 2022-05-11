import {
  EToolkitIdSystem
} from '../../../enum';

import onToolkitItemClick from './on-toolkit-item-click';

/**
 * 「体验新版」工具点击时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClickedVersionNew
 */
export default function onToolkitVersionNewClick(fn: () => void): () => void {
  return onToolkitItemClick(EToolkitIdSystem.VERSION_NEW, fn);
}
