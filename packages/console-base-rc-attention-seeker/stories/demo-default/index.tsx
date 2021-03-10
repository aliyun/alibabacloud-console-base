import React, {
  useRef,
  useEffect,
  useCallback
} from 'react';

import {
  H1,
  P,
  LongArticle,
  Button
} from '@alicloud/demo-rc-elements';

import {
  append
} from '../../src';

export default function DemoDefault(): JSX.Element {
  const refSpan = useRef<HTMLSpanElement | null>(null);
  const refButton1 = useRef<HTMLButtonElement | null>(null);
  const refButton2 = useRef<HTMLButtonElement | null>(null);
  
  const handleSpanAttention = useCallback(() => {
    if (refSpan.current) {
      append(refSpan.current);
    }
  }, []);
  const handleButton1Attention = useCallback(() => {
    if (refButton1.current) {
      append(refButton1.current);
    }
  }, []);
  const handleButton2Attention = useCallback(() => {
    if (refButton2.current) {
      append(refButton2.current);
    }
  }, []);
  
  useEffect(handleSpanAttention, [handleSpanAttention]);
  
  return <>
    <H1>@alicloud/console-base-rc-attention-seeker</H1>
    <Button onClick={handleSpanAttention}>the strong</Button>
    <Button ref={refButton1} onClick={handleButton2Attention}>scroll down to the button</Button>
    <P>1234567890- qwer <strong ref={refSpan}>and i will get the attention</strong> op[[] ;lkjhgfdsa zxcvbnm,./</P>
    <LongArticle />
    <Button ref={refButton2} onClick={handleButton1Attention}>scroll up to the button</Button>
  </>;
}
