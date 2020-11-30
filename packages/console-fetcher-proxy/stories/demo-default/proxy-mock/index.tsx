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
  forConsoleBase
} from '@alicloud/console-base-messenger';
import {
  H2,
  Button
} from '@alicloud/demo-rc-elements';

setGlobalVar();
forConsoleBase.ready();

// fetcher 插件的实现基本原理
export default function ProxyMock(): JSX.Element {
  const [stateProxyMocked, setStateProxyMocked] = useState<boolean>(true);
  const handleToggleProxyMocked = useCallback(() => setStateProxyMocked(!stateProxyMocked), [stateProxyMocked, setStateProxyMocked]);
  
  useEffect(() => setProxyFetcher(stateProxyMocked), [stateProxyMocked]);
  
  useEffect(() => forConsoleBase.onFetcherRequest((config: FetcherConfig): Promise<unknown> => {
    return fetcher.request(config);
  }), []);
  
  return <>
    <H2>测试专用的 proxy 实现</H2>
    <Button {...{
      onClick: handleToggleProxyMocked
    }}>mock proxy {stateProxyMocked ? 'ON' : 'OFF'}</Button>
  </>;
}
