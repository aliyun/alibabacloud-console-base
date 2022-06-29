/* eslint-disable max-len */
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
  z-index: 1234567;
  padding: 20px;
  background-color: #ffc;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ScZIndex = styled(P)`
  position: relative;
  z-index: 1;
`;

const ScTheDiv = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: #0064c8;
  width: 400px;
  text-align: center;
  color: #fff;
`;

const ScTheRound = styled.div`
  border-radius: 50%;
  background: #c80064;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
`;

export default function DemoDefault(): JSX.Element {
  const [stateDomP, setStateDomP] = useState<HTMLElement | null>(null);
  const [stateDomDiv, setStateDomDiv] = useState<HTMLElement | null>(null);
  const [stateDomRound, setStateDomRound] = useState<HTMLElement | null>(null);
  const [stateDomStrong, setStateDomStrong] = useState<HTMLElement | null>(null);
  const [stateDomShallEscape, setStateDomShallEscape] = useState<HTMLElement | null>(null);
  const [stateDomButtonTop, setStateDomButtonTop] = useState<HTMLElement | null>(null);
  const [stateDomButtonBottom, setStateDomButtonBottom] = useState<HTMLElement | null>(null);
  
  const handleAttentionP = useCallback(() => {
    if (stateDomP) {
      prepend(stateDomP);
    }
  }, [stateDomP]);
  const handleAttentionDiv = useCallback(() => {
    if (stateDomDiv) {
      prepend(stateDomDiv);
    }
  }, [stateDomDiv]);
  const handleAttentionRound = useCallback(() => {
    if (stateDomRound) {
      prepend(stateDomRound);
    }
  }, [stateDomRound]);
  const handleAttentionStrong = useCallback(() => {
    if (stateDomStrong) {
      prepend(stateDomStrong);
    }
  }, [stateDomStrong]);
  const handleAttentionShallEscape = useCallback(() => {
    if (stateDomShallEscape) {
      prepend(stateDomShallEscape);
    }
  }, [stateDomShallEscape]);
  const handleAttentionButtonTop = useCallback(() => {
    if (stateDomButtonTop) {
      prepend(stateDomButtonTop);
    }
  }, [stateDomButtonTop]);
  const handleAttentionButtonBottom = useCallback(() => {
    if (stateDomButtonBottom) {
      prepend(stateDomButtonBottom);
    }
  }, [stateDomButtonBottom]);
  
  return <>
    <ThemeSwitcher />
    <H1>@alicloud/console-base-rc-attention-seeker</H1>
    <Button onClick={handleAttentionStrong}>the strong</Button>
    <Button onClick={handleAttentionShallEscape}>shall escape parent z-index</Button>
    <Button onClick={handleAttentionDiv}>the div</Button>
    <Button onClick={handleAttentionRound}>the round</Button>
    <Button onClick={handleAttentionP}>the p</Button>
    <Button ref={setStateDomButtonTop} onClick={handleAttentionButtonBottom}>scroll down to the button</Button>
    <ScFixed>
      <Button onClick={handleAttentionStrong}>the strong</Button>
      <Button onClick={handleAttentionShallEscape}>shall escape parent z-index</Button>
      <Button onClick={handleAttentionDiv}>the div</Button>
      <Button onClick={handleAttentionRound}>the round</Button>
      <Button onClick={handleAttentionP}>the p</Button>
      <Button onClick={clear}>clear</Button>
    </ScFixed>
    <P ref={setStateDomP}>「金麟岂是池中物，一遇风云便化龙。九霄龙吟惊天变，风云际会浅水游。」这是泥菩萨给天下会帮主雄霸的四句批言，概括了他一生的命运。前两句「金麟岂是池中物，一遇风云便化龙」是指前半生雄霸的霸业尽得聂风和步惊云的帮助，因而完成。后两句「九霄龙吟惊天变，风云际会浅水游」则是指雄霸失败，亦是风云所致。所谓： <strong ref={setStateDomStrong}>成也风云，败也风云。</strong></P>
    <ScZIndex>父节点有 z-index 的情况，子元素 z-index <em ref={setStateDomShallEscape}>无法逃离</em> 父元素的 z-index。</ScZIndex>
    <ScTheDiv ref={setStateDomDiv}>another div</ScTheDiv>
    <ScTheRound ref={setStateDomRound}>i am round</ScTheRound>
    <LongArticle />
    <Button ref={setStateDomButtonBottom} onClick={handleAttentionButtonTop}>scroll up to the button</Button>
  </>;
}
