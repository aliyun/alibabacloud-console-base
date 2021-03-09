import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';
import setRegionResourceCount from '../../app-broadcast/region/set-region-resource-count';

/**
 * console-base 通知应用刷新地域的资源数，具体的逻辑需要控制台来实现
 */
export default function onRegionRefreshResourceCount(fn: (payload: string[]) => Promise<Record<string, number>>): () => void {
  return subscribeByApp<string[]>(EMessageBroadcastByConsoleBase.REGION_REFRESH_RESOURCE_COUNT, (regionIds?: string[]): void => {
    if (!regionIds?.length) {
      return;
    }
    
    const promise = fn(regionIds);
    
    if (!promise?.then) {
      return;
    }
    
    promise.then(setRegionResourceCount);
  });
}
