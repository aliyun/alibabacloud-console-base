import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
/**
 * 资源组数据加载完成时的回调
 */

export default function onResourceGroupDataLoaded(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.RESOURCE_GROUP_DATA_LOADED, fn);
}