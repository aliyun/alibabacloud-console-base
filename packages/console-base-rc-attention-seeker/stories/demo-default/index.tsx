/* eslint-disable max-len */
import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  P,
  Button,
  InputSwitch,
  LongArticle
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

const ScBorderRadiusPx = styled.button`
  padding: 20px;
  border: 0;
  border-radius: 12px;
  background: #0064c8;
  width: 400px;
  text-align: center;
  color: #fff;
`;

const ScBorderRadiusPx2 = styled.button`
  border: 0;
  border-radius: 80px;
  background: #00c864;
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
`;

const ScBorderRadius50Percent = styled.button`
  border: 0;
  border-radius: 50%;
  background: #c80064;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
`;

const ScBorderRadius20Percent = styled.button`
  border: 0;
  border-radius: 20%;
  background: #6400c8;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
`;

function alertClick(): void {
  // eslint-disable-next-line no-alert
  alert('clicked!');
}

export default function DemoDefault(): JSX.Element {
  const [stateProtect, setStateProtect] = useState(false);
  const [stateDomP, setStateDomP] = useState<HTMLElement | null>(null);
  const [stateBorderRadiusPx, setStateBorderRadiusPx] = useState<HTMLElement | null>(null);
  const [stateBorderRadiusPx2, setStateBorderRadiusPx2] = useState<HTMLElement | null>(null);
  const [stateBorderRadius20Percent, setStateBorderRadius20Percent] = useState<HTMLElement | null>(null);
  const [stateBorderRadius50Percent, setStateBorderRadius50Percent] = useState<HTMLElement | null>(null);
  const [stateDomStrong, setStateDomStrong] = useState<HTMLElement | null>(null);
  const [stateDomShallEscape, setStateDomShallEscape] = useState<HTMLElement | null>(null);
  const [stateDomButtonTop, setStateDomButtonTop] = useState<HTMLElement | null>(null);
  const [stateDomButtonBottom, setStateDomButtonBottom] = useState<HTMLElement | null>(null);
  
  const handlePrepend = useCallback((dom: HTMLElement | null) => {
    if (!dom) {
      return;
    }
    
    prepend(dom, stateProtect ? {
      protect: stateProtect
    } : undefined);
  }, [stateProtect]);
  const handleAttentionP = useCallback(() => {
    handlePrepend(stateDomP);
  }, [stateDomP, handlePrepend]);
  const handleAttentionBorderRadiusPx = useCallback(() => {
    handlePrepend(stateBorderRadiusPx);
  }, [stateBorderRadiusPx, handlePrepend]);
  const handleAttentionBorderRadiusPx2 = useCallback(() => {
    handlePrepend(stateBorderRadiusPx2);
  }, [stateBorderRadiusPx2, handlePrepend]);
  const handleAttentionBorderRadius20Percent = useCallback(() => {
    handlePrepend(stateBorderRadius20Percent);
  }, [stateBorderRadius20Percent, handlePrepend]);
  const handleAttentionBorderRadius50Percent = useCallback(() => {
    handlePrepend(stateBorderRadius50Percent);
  }, [stateBorderRadius50Percent, handlePrepend]);
  const handleAttentionStrong = useCallback(() => {
    handlePrepend(stateDomStrong);
  }, [stateDomStrong, handlePrepend]);
  const handleAttentionShallEscape = useCallback(() => {
    handlePrepend(stateDomShallEscape);
  }, [stateDomShallEscape, handlePrepend]);
  const handleAttentionButtonTop = useCallback(() => {
    handlePrepend(stateDomButtonTop);
  }, [stateDomButtonTop, handlePrepend]);
  const handleAttentionButtonBottom = useCallback(() => {
    handlePrepend(stateDomButtonBottom);
  }, [stateDomButtonBottom, handlePrepend]);
  
  const jsxButtons = <>
    <Button onClick={handleAttentionP}>风云片段</Button>
    <Button onClick={handleAttentionStrong}>成也风云，败也风云</Button>
    <Button onClick={handleAttentionShallEscape}>无法逃离</Button>
    <Button onClick={handleAttentionBorderRadiusPx}>radius: 12px</Button>
    <Button onClick={handleAttentionBorderRadiusPx2}>radius: 80px</Button>
    <Button onClick={handleAttentionBorderRadius20Percent}>radius: 20%</Button>
    <Button onClick={handleAttentionBorderRadius50Percent}>radius: 50%</Button>
  </>;
  
  return <>
    <ThemeSwitcher />
    <H1>@alicloud/console-base-rc-attention-seeker</H1>
    <InputSwitch {...{
      label: 'Protect!',
      value: stateProtect,
      onChange: setStateProtect
    }} />
    {jsxButtons}
    <Button ref={setStateDomButtonTop} onClick={handleAttentionButtonBottom}>scroll down to the button</Button>
    <ScFixed>
      {jsxButtons}
      <Button onClick={clear}>clear</Button>
    </ScFixed>
    <P ref={setStateDomP}>「金麟岂是池中物，一遇风云便化龙。九霄龙吟惊天变，风云际会浅水游。」这是泥菩萨给天下会帮主雄霸的四句批言，概括了他一生的命运。前两句「金麟岂是池中物，一遇风云便化龙」是指前半生雄霸的霸业尽得聂风和步惊云的帮助，因而完成。后两句「九霄龙吟惊天变，风云际会浅水游」则是指雄霸失败，亦是风云所致。所谓：<strong ref={setStateDomStrong}>成也风云，败也风云</strong>。</P>
    <ScZIndex>父节点有 z-index 的情况，子元素 z-index <em ref={setStateDomShallEscape}>无法逃离</em> 父元素的 z-index。</ScZIndex>
    <ScBorderRadiusPx ref={setStateBorderRadiusPx} onClick={alertClick}>radius: 12px</ScBorderRadiusPx>
    <ScBorderRadiusPx2 ref={setStateBorderRadiusPx2} onClick={alertClick}>radius: 80px</ScBorderRadiusPx2>
    <ScBorderRadius20Percent ref={setStateBorderRadius20Percent} onClick={alertClick}>radius: 20%</ScBorderRadius20Percent>
    <ScBorderRadius50Percent ref={setStateBorderRadius50Percent} onClick={alertClick}>radius: 50%</ScBorderRadius50Percent>
    <LongArticle />
    <Button ref={setStateDomButtonBottom} onClick={handleAttentionButtonTop}>scroll up to the button</Button>
  </>;
}
