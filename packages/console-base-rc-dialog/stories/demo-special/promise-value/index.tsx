/* eslint-disable no-console */
import React, {
  useCallback
} from 'react';

import {
  H1,
  H3,
  P,
  Button
} from '@alicloud/demo-rc-elements';

import {
  DialogProps,
  DialogSize,
  open,
  slide,
  slideUp
} from '../../../src';

function onResolve(resolved: any): void {
  console.info('[RESOLVED]', resolved);
}

function onReject(rejected: any): void {
  console.info('[REJECTED]', rejected);
}

const props: DialogProps<any> = {
  title: '演示 Promise 的 resolve 与 reject',
  content: <>
    <P>可以通过 button 的 result 属性让 Dialog 的 Promise resolve 指定的值</P>
    <H3>result 无</H3>
    <P>undefined 的值作为 Promise 的值</P>
    <H3>result: value</H3>
    <P>result 的值作为 Promise 的值</P>
    <H3>result: () =&gt; value</H3>
    <P>result 是一个方法，它的返回将作为 Promise 的值</P>
    <H3>result: () =&gt; Promise</H3>
    <P>result 是一个方法，它返回的是 Promise，则自动执行 lock，此 Promise 的返回即 Dialog 的最终返回</P>
    <H3>onClick: return false</H3>
    <P>button 的 onClick 如果 return 了 false，你将无法利用 result，也无法在按钮点击时候自动关闭 Dialog。但你可以在 onClick 里边通过传入的第一个参数进行很细的控制。</P>
  </>,
  buttons: [{
    label: '没有 value'
  }, {
    label: '直接 value',
    result: '直接返回 value'
  }, {
    label: '方法',
    result() {
      return '方法返回值';
    }
  }, {
    label: 'promise:resolve',
    result() {
      return new Promise(resolve => {
        window.setTimeout(() => resolve('PROMISE RESOLVE'), 2000);
      });
    }
  }, {
    label: 'promise:reject',
    result() {
      return new Promise((_resolve, reject) => {
        window.setTimeout(() => reject(new Error('PROMISE REJECT')), 2000);
      });
    }
  }, {
    label: 'close:via:code',
    onClick({
      data,
      lock,
      unlock,
      close
    }) {
      lock(true);
      
      new Promise(resolve => {
        window.setTimeout(() => {
          resolve(data);
        }, 1000);
      }).then((result: any) => {
        unlock();
        close(result);
      });
      
      return false;
    }
  }],
  size: DialogSize.L
};

export default function PromiseValue(): JSX.Element {
  const handleTestOpen = useCallback(() => {
    open(props).then(onResolve, onReject);
  }, []);
  const handleTestSlide = useCallback(() => {
    slide(props).then(onResolve, onReject);
  }, []);
  const handleTestSlideUp = useCallback(() => {
    slideUp(props).then(onResolve, onReject);
  }, []);
  
  return <>
    <H1>如何控制 Promise</H1>
    <Button {...{
      onClick: handleTestOpen
    }}>open</Button>
    <Button {...{
      onClick: handleTestSlide
    }}>slide</Button>
    <Button {...{
      onClick: handleTestSlideUp
    }}>slideUp</Button>
  </>;
}
