import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  PreJson,
  Button
} from '@alicloud/demo-rc-elements';

import getCacheStorage from '../../src/util/get-cache-storage';

export default function CacheStorage(): JSX.Element {
  const [stateCacheStorage, setStateCacheStorage] = useState<unknown>(getCacheStorage());
  
  const handleRefreshCacheStorage = useCallback(() => setStateCacheStorage({
    ...getCacheStorage()
  }), []);
  
  return <>
    <H1>cache storage - 仅 demo 下可用（不 export）</H1>
    <Button onClick={handleRefreshCacheStorage}>手动刷新</Button>
    <PreJson o={stateCacheStorage} />
  </>;
}
