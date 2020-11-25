/* eslint-disable no-console */
import React, {
  useEffect
} from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  broadcast,
  subscribe,
  subscribeOnce,
  broadcastPromise,
  subscribePromise
} from '../../src';

const TOPIC = {
  TEST: 'test',
  TEST_PROMISE: 'test:promise',
  TEST_PROMISE_ERROR: 'test:promise:error'
};

function broadcastTest(): void {
  broadcast<number>(TOPIC.TEST, Date.now());
}

function broadcastPromiseTest(): void {
  broadcastPromise<void, number>(TOPIC.TEST_PROMISE, Date.now());
}

function broadcastPromiseTestError(): void {
  broadcastPromise(TOPIC.TEST_PROMISE_ERROR).then(() => {
    console.info('broadcastPromise return OK');
  }, err => {
    console.info('broadcastPromise return failed', {err});
  });
}

export default function DemoDefault(): JSX.Element {
  useEffect(() => subscribe<number>(TOPIC.TEST, payload => {
    console.info('subscribe', payload);
  }), []);
  useEffect(() => subscribeOnce<number>(TOPIC.TEST, payload => { // 仅会触发一次
    console.info('subscribeOnce', payload);
  }), []);
  useEffect(() => subscribePromise<void, number>(TOPIC.TEST_PROMISE, payload => {
    console.info('subscribePromise', payload);
  }), []);
  useEffect(() => subscribePromise<void, void>(TOPIC.TEST_PROMISE_ERROR, (): Promise<void> => {
    return new Promise((_resolve, reject) => {
      setTimeout(() => {
        const err = new Error('fuck me');
        
        err.name = 'FuckMe';
        (err as any).anyInfo = {
          hell: 'hell',
          hello: {
            toYou: 'too'
          }
        };
        
        reject(err);
      }, 1200);
    });
  }), []);
  
  return <>
    <H1>broadcast / subscribe / subscribeOnce</H1>
    <div>
      <Button onClick={broadcastTest}>broadcast</Button>
    </div>
    <H1>broadcastPromise / subscribePromise</H1>
    <div>
      <Button onClick={broadcastPromiseTest}>broadcastPromise</Button>
      <Button onClick={broadcastPromiseTestError}>broadcastPromise with Error</Button>
    </div>
  </>;
}
