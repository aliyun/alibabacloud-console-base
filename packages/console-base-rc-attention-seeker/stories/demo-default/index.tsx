import React, {
  useRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  P,
  LongArticle,
  Button
} from '@alicloud/demo-rc-elements';

import {
  prepend,
  clear
} from '../../src';

const ScFixed = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  padding: 20px;
  z-index: 1234567;
  background-color: #ffc;
`;

const ScTheDiv = styled.div`
  padding: 20px;
  width: 400px;
  background: #0064c8;
  color: #fff;
  text-align: center;
`;

export default function DemoDefault(): JSX.Element {
  const refP = useRef<HTMLParagraphElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const refStrong = useRef<HTMLSpanElement | null>(null);
  const refButton1 = useRef<HTMLButtonElement | null>(null);
  const refButton2 = useRef<HTMLButtonElement | null>(null);
  
  const handlePAttention = useCallback(() => {
    if (refP.current) {
      prepend(refP.current);
    }
  }, []);
  const handleDivAttention = useCallback(() => {
    if (refDiv.current) {
      prepend(refDiv.current);
    }
  }, []);
  const handleStrongAttention = useCallback(() => {
    if (refStrong.current) {
      prepend(refStrong.current);
    }
  }, []);
  const handleButton1Attention = useCallback(() => {
    if (refButton1.current) {
      prepend(refButton1.current);
    }
  }, []);
  const handleButton2Attention = useCallback(() => {
    if (refButton2.current) {
      prepend(refButton2.current);
    }
  }, []);
  
  return <>
    <H1>@alicloud/console-base-rc-attention-seeker</H1>
    <Button onClick={handleStrongAttention}>the strong</Button>
    <Button onClick={handleDivAttention}>the div</Button>
    <Button onClick={handlePAttention}>the p</Button>
    <Button ref={refButton1} onClick={handleButton2Attention}>scroll down to the button</Button>
    <ScFixed>
      <Button onClick={handleStrongAttention}>the strong</Button>
      <Button onClick={handleDivAttention}>the div</Button>
      <Button onClick={handlePAttention}>the p</Button>
      <Button onClick={clear}>clear</Button>
    </ScFixed>
    <P ref={refP}>1234567890- qwer <strong ref={refStrong}>and i will get the attention</strong> op[[] ;lkjhgfdsa zxcvbnm,./</P>
    <ScTheDiv ref={refDiv}>another div</ScTheDiv>
    <LongArticle />
    <Button ref={refButton2} onClick={handleButton1Attention}>scroll up to the button</Button>
  </>;
}
