import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import {
  WithPromise
} from '../../src';
import PkgInfo from '../pkg-info';

interface IPropsLoaded {
  data?: number[];
}

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

function Loaded({
  data
}: IPropsLoaded): JSX.Element {
  return <div>
    {data?.map(v => <span key={v}>item - {v}</span>)}
  </div>;
}

export default function DemoDefault(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<number[]> | null>(null);
  const handleRandomPromise = useCallback(() => setStatePromise(randomPromise()), [setStatePromise]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>WithPromise</H1>
    <Button onClick={handleRandomPromise}>random promise</Button>
    <WithPromise<number[]> {...{
      promise: statePromise,
      renderLoaded: <Loaded />,
      retry: handleRandomPromise
    }} />
  </>;
}
