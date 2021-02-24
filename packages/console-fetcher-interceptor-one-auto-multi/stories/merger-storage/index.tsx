import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  PreJson,
  Button
} from '@alicloud/demo-rc-elements';

import mergerGetStorage from '../../src/util/merger/get-storage';
import mergerRemove from '../../src/util/merger/remove';

export default function CacheStorage(): JSX.Element {
  const [stateCacheStorage, setStateCacheStorage] = useState<Record<string, unknown>>(mergerGetStorage());
  
  const handleRefreshCacheStorage = useCallback(() => setStateCacheStorage({
    ...mergerGetStorage()
  }), []);
  const handleCleanup = useCallback(() => {
    Object.keys(mergerGetStorage()).forEach(mergerRemove);
    handleRefreshCacheStorage();
  }, [handleRefreshCacheStorage]);
  
  return <>
    <H1>merger storage - 仅 demo 下可用（不 export）</H1>
    <Button onClick={handleRefreshCacheStorage}>手动刷新</Button>
    <Button onClick={handleCleanup}>手动清空</Button>
    <PreJson o={stateCacheStorage} />
  </>;
}
