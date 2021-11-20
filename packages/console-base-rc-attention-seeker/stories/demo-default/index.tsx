import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  P,
  LongArticle,
  Button
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

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
  border-radius: 12px;
  background: #0064c8;
  color: #fff;
  text-align: center;
`;

export default function DemoDefault(): JSX.Element {
  const [stateDomP, setStateDomP] = useState<HTMLElement | null>(null);
  const [stateDomDiv, setStateDomDiv] = useState<HTMLElement | null>(null);
  const [stateDomStrong, setStateDomStrong] = useState<HTMLElement | null>(null);
  const [stateDomButton1, setStateDomButton1] = useState<HTMLElement | null>(null);
  const [stateDomButton2, setStateDomButton2] = useState<HTMLElement | null>(null);
  
  const handlePAttention = useCallback(() => {
    if (stateDomP) {
      prepend(stateDomP);
    }
  }, [stateDomP]);
  const handleDivAttention = useCallback(() => {
    if (stateDomDiv) {
      prepend(stateDomDiv);
    }
  }, [stateDomDiv]);
  const handleStrongAttention = useCallback(() => {
    if (stateDomStrong) {
      prepend(stateDomStrong);
    }
  }, [stateDomStrong]);
  const handleButton1Attention = useCallback(() => {
    if (stateDomButton1) {
      prepend(stateDomButton1);
    }
  }, [stateDomButton1]);
  const handleButton2Attention = useCallback(() => {
    if (stateDomButton2) {
      prepend(stateDomButton2);
    }
  }, [stateDomButton2]);
  
  return <>
    <ThemeSwitcher />
    <H1>@alicloud/console-base-rc-attention-seeker</H1>
    <Button onClick={handleStrongAttention}>the strong</Button>
    <Button onClick={handleDivAttention}>the div</Button>
    <Button onClick={handlePAttention}>the p</Button>
    <Button ref={setStateDomButton1} onClick={handleButton2Attention}>scroll down to the button</Button>
    <ScFixed>
      <Button onClick={handleStrongAttention}>the strong</Button>
      <Button onClick={handleDivAttention}>the div</Button>
      <Button onClick={handlePAttention}>the p</Button>
      <Button onClick={clear}>clear</Button>
    </ScFixed>
    <P ref={setStateDomP}>「金麟岂是池中物，一遇风云便化龙。九霄龙吟惊天变，风云际会浅水游。」这是泥菩萨给天下会帮主雄霸的四句批言，概括了他一生的命运。前两句「金麟岂是池中物，一遇风云便化龙」是指前半生雄霸的霸业尽得聂风和步惊云的帮助，因而完成。后两句「九霄龙吟惊天变，风云际会浅水游」则是指雄霸失败，亦是风云所致。所谓： <strong ref={setStateDomStrong}>成也风云，败也风云。</strong></P>
    <ScTheDiv ref={setStateDomDiv}>another div</ScTheDiv>
    <LongArticle />
    <Button ref={setStateDomButton2} onClick={handleButton1Attention}>scroll up to the button</Button>
  </>;
}
