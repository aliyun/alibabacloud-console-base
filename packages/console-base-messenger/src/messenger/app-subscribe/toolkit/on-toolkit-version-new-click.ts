import onToolkitItemClick from './on-toolkit-item-click';

/**
 * 「体验新版」工具点击时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClickedVersionNew
 */
export default function onToolkitVersionNewClick(fn: () => void): () => void {
  return onToolkitItemClick('tool:sys:version:new', fn); // TODO 定义得不好，硬掉
}
