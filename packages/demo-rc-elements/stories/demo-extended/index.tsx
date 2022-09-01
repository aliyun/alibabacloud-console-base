import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button,
  PreJson,
  PrePromise
} from '../../src';
import Shared from '../_shared';

const TEST_JSON = {
  str: 'hello world',
  num: 1234567,
  bool: false,
  fn() { return '12345'; },
  jsx: <span>FUCK</span>
};

function randomPromise(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const ram = Math.ceil(Math.random() * 2000);
    
    window.setTimeout(() => {
      if (ram % 2) {
        resolve(ram);
      } else {
        reject(new Error(`${ram} NOT odd`));
      }
    }, ram);
  });
}

export default function DemoExtended(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleRandomPromise = useCallback(() => setStatePromise(randomPromise()), [setStatePromise]);
  
  return <>
    <Shared />
    <H1>PreJson</H1>
    <PreJson o={TEST_JSON} />
    <H1>PrePromise</H1>
    <Button onClick={handleRandomPromise}>random promise</Button>
    <PrePromise promise={statePromise} />
  </>;
}
