import {
  broadcastByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_OPEN_URL
} from '../const';

/**
 * 打开 URL（将由特定的插件对 URL 进行判断，如果有插件愿意接收该 URL 并以特定的方式打开，则该方式有效，否则此方法调用将石沉大海）
 * 
 * 1. 不要强依赖此方法（可能造成功能不稳定可用）
 * 2. 该方法比较适合用来做临时测试
 * 3. 插件需实现 `onOpenUrl` 支持方法调用，插件需实现获取 URL 参数 `console_base_open_url` 实现直接打开
 */
export default function openUrl(url: string): void {
  broadcastByApp<string>(MESSAGE_TYPE_OPEN_URL, url);
}