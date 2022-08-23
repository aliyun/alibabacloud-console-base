import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  H2,
  Button,
  PreJson,
  PrePromise,
  List
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
    <H1>非原生元素</H1>
    <H2>便于书写</H2>
    <List>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      <span>这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</span>
    </List>
    <List ordered>
      <>丽丽一上床</>
      <>意思有空日</>
      <>优化十八禁</>
      <>充分草于是</>
      <span>这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</span>
    </List>
    <H2>PreJson / PrePromise</H2>
    <PreJson o={TEST_JSON} />
    <Button onClick={handleRandomPromise}>random promise</Button>
    <PrePromise promise={statePromise} />
  </>;
}
