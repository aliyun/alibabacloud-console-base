import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  PreJson,
  Button
} from '@alicloud/demo-rc-elements';

import storage from '../../src/util/merger/_storage';
import remove from '../../src/util/merger/remove';

export default function CacheStorage(): JSX.Element {
  const [stateCacheStorage, setStateCacheStorage] = useState<Record<string, unknown>>(storage());
  
  const handleRefreshCacheStorage = useCallback(() => setStateCacheStorage({
    ...storage()
  }), []);
  const handleCleanup = useCallback(() => {
    Object.keys(storage()).forEach(remove);
    handleRefreshCacheStorage();
  }, [handleRefreshCacheStorage]);
  
  return <>
    <H1>merger storage - 仅 demo 下可用（不 export）</H1>
    <Button onClick={handleRefreshCacheStorage}>手动刷新</Button>
    <Button onClick={handleCleanup}>手动清空</Button>
    <PreJson o={stateCacheStorage} />
  </>;
}
