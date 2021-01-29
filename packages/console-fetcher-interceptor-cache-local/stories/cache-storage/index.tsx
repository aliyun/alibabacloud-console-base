import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  PreJson,
  Button
} from '@alicloud/demo-rc-elements';

import cacheGetStorage from '../../src/util/cache/get-storage';
import cacheRemove from '../../src/util/cache/remove';

export default function CacheStorage(): JSX.Element {
  const [stateCacheStorage, setStateCacheStorage] = useState<Record<string, unknown>>(cacheGetStorage());
  
  const handleRefreshCacheStorage = useCallback(() => setStateCacheStorage({
    ...cacheGetStorage()
  }), []);
  const handleCleanup = useCallback(() => {
    Object.keys(stateCacheStorage).forEach(v => {
      cacheRemove({
        key: v
      });
    });
    handleRefreshCacheStorage();
  }, [handleRefreshCacheStorage, stateCacheStorage]);
  
  return <>
    <H1>cache storage - 仅 demo 下可用（不 export）</H1>
    <Button onClick={handleRefreshCacheStorage}>手动刷新</Button>
    <Button onClick={handleCleanup}>手动清空</Button>
    <PreJson o={stateCacheStorage} />
  </>;
}
