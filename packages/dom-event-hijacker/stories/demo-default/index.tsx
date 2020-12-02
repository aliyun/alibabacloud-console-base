/* eslint-disable no-console */
import React, {
  useRef,
  useEffect
} from 'react';

import {
  Button,
  P
} from '@alicloud/demo-rc-elements';

import hijackClickGlobal, {
  hijackClickInDom
} from '../../src';

export default function DemoDefault(): JSX.Element {
  const refP = useRef<HTMLDivElement>(null);
  
  useEffect((): () => void => hijackClickGlobal({
    condition(e) {
      return e.tagName === 'BUTTON';
    },
    callback(el) {
      console.info(el);
    }
  }), []);
  
  useEffect((): (() => void) | void => {
    if (refP.current) {
      return hijackClickInDom(refP.current, {
        condition(e) {
          return e.tagName === 'CODE';
        },
        callback(el) {
          console.info(el);
        }
      });
    }
  }, []);
  
  return <>
    <Button>111</Button>
    <Button>222</Button>
    <Button>333</Button>
    <Button>444</Button>
    <P ref={refP}>
      <code>111</code>
      <code>222</code>
      <code>333</code>
      <code>444</code>
    </P>
  </>;
}
