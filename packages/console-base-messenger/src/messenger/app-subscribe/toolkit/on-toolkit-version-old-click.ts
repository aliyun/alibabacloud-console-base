import onToolkitItemClick from './on-toolkit-item-click';

/**
 * 「返回旧版」工具点击时的回调
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeClickedVersionOld
 */
export default function onToolkitVersionOldClick(fn: () => void): () => void {
  return onToolkitItemClick('tool:sys:version:old', fn); // TODO 定义得不好，硬掉
}
