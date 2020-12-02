import { EMessageBroadcastByConsoleBase } from '../../const';
import subscribeByApp from '../../util/subscribe-by-app';
import setRegionResourceCount from '../app-broadcast/set-region-resource-count'; // 内部消费了

/**
 * console-base 通知应用刷新地域的资源数，具体的逻辑需要控制台来实现
 */

export default function onRegionRefreshResourceCount(fn) {
  return subscribeByApp(EMessageBroadcastByConsoleBase.REGION_REFRESH_RESOURCE_COUNT, function (regionIds) {
    if (!(regionIds !== null && regionIds !== void 0 && regionIds.length)) {
      return;
    }

    var promise = fn(regionIds);

    if (!(promise !== null && promise !== void 0 && promise.then)) {
      return;
    }

    promise.then(setRegionResourceCount);
  });
}