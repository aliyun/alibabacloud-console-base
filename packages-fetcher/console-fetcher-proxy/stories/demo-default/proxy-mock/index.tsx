import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import fetcher, {
  FetcherConfig
} from '@alicloud/console-fetcher';
import {
  setGlobalVar,
  setProxyFetcher
} from '@alicloud/console-base-global';
import {
  forApp,
  ready,
  onFetcherRequest
} from '@alicloud/console-base-messenger';
import {
  H2,
  Button
} from '@alicloud/demo-rc-elements';

setGlobalVar(forApp);
ready();

// fetcher 插件的实现基本原理
export default function ProxyMock(): JSX.Element {
  const [stateProxyMocked, setStateProxyMocked] = useState<boolean>(true);
  const handleToggleProxyMocked = useCallback(() => setStateProxyMocked(!stateProxyMocked), [stateProxyMocked, setStateProxyMocked]);
  
  useEffect(() => setProxyFetcher(stateProxyMocked), [stateProxyMocked]);
  useEffect(() => onFetcherRequest((fetcherConfig: FetcherConfig): Promise<unknown> => fetcher.request(fetcherConfig)), []);
  
  return <>
    <H2>测试专用的 proxy 实现</H2>
    <Button {...{
      onClick: handleToggleProxyMocked
    }}>mock proxy {stateProxyMocked ? 'ON' : 'OFF'}</Button>
  </>;
}
