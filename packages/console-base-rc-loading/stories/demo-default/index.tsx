import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import Loading, {
  LoadingProps,
  WithPromise
} from '../../src';
import Knobs from '../knobs';

function randomPromise(): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const ram = Math.ceil(Math.random() * 2000);
    
    window.setTimeout(() => {
      if (ram % 2) {
        resolve([1, 2, 3]);
      } else {
        reject(new Error(`${ram} NOT odd`));
      }
    }, ram);
  });
}

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<Partial<LoadingProps>>({});
  const [statePromise, setStatePromise] = useState<Promise<number[]> | null>(null);
  
  const handleRandomPromise = useCallback(() => setStatePromise(randomPromise()), [setStatePromise]);
  const renderLoaded = useCallback((result: number[]) => <div>
    {result.map(v => <span>item - {v}</span>)}
  </div>, []);
  
  return <>
    <Knobs onChange={setStateProps} />
    <H1>Loading - 调整 knobs 看效果</H1>
    <Loading {...stateProps} />
    <H1>WithLoading</H1>
    <Button onClick={handleRandomPromise}>random promise</Button>
    <WithPromise<number[]> {...{
      promise: statePromise,
      renderLoaded,
      retry: handleRandomPromise
    }} />
  </>;
}
