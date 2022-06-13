import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  P,
  Button,
  PrePromise,
  InputText,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import {
  fetcher1
} from '../fetcher';

const ARR_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function DemoCacheAndMerger(): JSX.Element {
  const [stateUrl, setStateUrl] = useState<string>('https://oneapi.alibaba-inc.com/mock/boshit/success');
  const [stateCacheLocal, setStateCacheLocal] = useState<boolean>(false);
  const [stateMerger, setStateMerger] = useState<boolean>(true);
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleFetch10Times = useCallback(() => {
    setStatePromise(Promise.all(ARR_10.map(v => fetcher1.request({
      url: stateUrl,
      cacheLocal: stateCacheLocal,
      merger: stateMerger
    }).then((o: unknown) => {
      console.info(v, o); // eslint-disable-line no-console
      
      return o;
    }, (err: Error) => {
      console.info(v, err); // eslint-disable-line no-console
      
      throw err;
    }))));
  }, [stateCacheLocal, stateMerger, stateUrl]);
  
  return <>
    <H1>测试 <code>cacheLocal</code>、<code>merger</code></H1>
    <P>仅测试 <code>cacheLocal</code> 和 <code>merger</code> 有没有开启的场景，不对具体的配置项做进一步的展开</P>
    <div>
      url <InputText {...{
        placeholder: 'url',
        value: stateUrl,
        onChange: setStateUrl
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: 'cacheLocal - 默认 false',
        value: stateCacheLocal,
        onChange: setStateCacheLocal
      }} />
    </div>
    <div>
      <InputSwitch {...{
        label: 'merger - 默认 true',
        value: stateMerger,
        onChange: setStateMerger
      }} />
    </div>
    <Button onClick={handleFetch10Times}>fetch x10</Button>
    <PrePromise promise={statePromise} />
  </>;
}
