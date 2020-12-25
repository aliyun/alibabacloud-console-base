/* eslint-disable no-console */
import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  H2,
  P,
  List,
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';
import {
  FetcherDemoRcFecsTip
} from '@alicloud/fetcher-demo-helpers';

import cookieGetToken from '../../src/util/cookie-get-token';
import cookieSetToken from '../../src/util/cookie-set-token';
import refreshToken from '../../src/util/refresh-token';
import fetcher, {
  fetcherNoFecs
} from '../fetcher';

function manyRefreshes(): void {
  refreshToken().then(() => console.info(1));
  refreshToken().then(() => console.info(2));
  refreshToken().then(() => console.info(3));
  refreshToken().then(() => console.info(4));
  refreshToken().then(() => console.info(5));
}

function openApiWillUseFecs(): void {
  fetcherNoFecs.post('/data/api.json', {
    product: 'slb',
    action: 'DescribeRegions'
  });
}

export default function DemoDefault(): JSX.Element {
  const [stateToken, setStateToken] = useState<string>(cookieGetToken());
  const [statePromisePost, setStatePromisePost] = useState<Promise<unknown> | null>(null);
  const [statePromiseGet, setStatePromiseGet] = useState<Promise<unknown> | null>(null);
  
  const handleClearToken = useCallback(() => {
    cookieSetToken('');
    setStateToken('');
  }, [setStateToken]);
  
  const handleRefreshTokenLocally = useCallback(() => {
    setStateToken(cookieGetToken());
  }, [setStateToken]);
  
  const handleRefreshTokenRemotely = useCallback(() => refreshToken().then(() => {
    handleRefreshTokenLocally();
  }), [handleRefreshTokenLocally]);
  
  const handleTestPost = useCallback(() => setStatePromisePost(fetcher.post('/api/console-base/product/recent/add', {
    productIds: ['oss']
  })), []);
  const handleTestGet = useCallback(() => setStatePromiseGet(fetcher.get('/api/console-base/config')), []);
  
  return <>
    <FetcherDemoRcFecsTip />
    <H1>如何测试</H1>
    <List>
      <>如果没有 token，POST 请求会否自行 refreshToken，后会否重新请求</>
      <>如果有 token，POST 请求的 body 是否含有 <code>sec_token</code>，值看下方</>
      <>GET 请求不受影响</>
    </List>
    <P>当前 Token 值：<code>{stateToken}</code></P>
    <div>
      <Button onClick={handleClearToken}>clear token</Button>
      <Button onClick={handleRefreshTokenLocally}>get token locally</Button>
      <Button onClick={handleRefreshTokenRemotely}>refresh token remotely</Button>
    </div>
    <H2>POST 请求</H2>
    <Button onClick={handleTestPost}>测试 POST</Button>
    <PrePromise promise={statePromisePost} />
    <H2>GET 不会受影响</H2>
    <Button onClick={handleTestGet}>测试 GET</Button>
    <PrePromise promise={statePromiseGet} />
    <H2>并发刷新</H2>
    <P>同时很多个 refreshToken 仅会发送一个请求</P>
    <Button onClick={manyRefreshes}>一次性触发多次仅发一个请求</Button>
    <H2>OpenAPI 自动转接到 FECS（因为当前不是 OneConsole）</H2>
    <Button onClick={openApiWillUseFecs}>OpenAPI</Button>
  </>;
}
