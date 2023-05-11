import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  H2,
  P,
  Alert
} from '@alicloud/demo-rc-elements';

import pkgInfo from '../../package.json';
import useMouseHover from '../../src';

const ScSpan = styled.span`
  display: inline-block;
  margin: 1px 2px;
  width: 120px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;
const ScActiveButton = styled.button`
  border: 0;
  width: 32px;
  height: 32px;
  color: #fff;
  transition: all ease-in-out 300ms;
`;

export default function DemoDefault(): JSX.Element {
  const [stateInProtected, setStateInProtected] = useState(false);
  const [stateInUnprotected, setStateInUnprotected] = useState(false);
  const [statePlaying, setStatePlaying] = useState(false);
  
  const handleMouseEnterProtected = useCallback(() => setStateInProtected(true), [setStateInProtected]);
  const handleMouseLeaveProtected = useCallback(() => setStateInProtected(false), [setStateInProtected]);
  
  const handleMouseEnterUnprotected = useCallback(() => setStateInUnprotected(true), [setStateInUnprotected]);
  const handleMouseLeaveUnprotected = useCallback(() => setStateInUnprotected(false), [setStateInUnprotected]);
  
  const handlePlaying = useCallback(() => setStatePlaying(true), [setStatePlaying]);
  const handleClickPlaying = useCallback(() => {
    setStatePlaying(!statePlaying);
  }, [statePlaying, setStatePlaying]);
  
  const [onMouseEnter, onMouseLeave] = useMouseHover({
    onEnter: handleMouseEnterProtected,
    onLeave: handleMouseLeaveProtected
  });
  const [onMouseEnterPlay, onMouseLeavePlay, onActiveChange] = useMouseHover({
    active: statePlaying,
    onEnter: handlePlaying,
    onActiveChange: handleClickPlaying
  });
  
  return <>
    <H1>{pkgInfo.name}@{pkgInfo.version}</H1>
    <Alert type="warning">注意：在 CodeSandbox 下，修改代码，热部署后，hover 会有问题，需要刷新（本地的 Storybook 下没有这个问题）。</Alert>
    <H2>不需要 click</H2>
    <P>无延时保护的 MouseEnter/Leave，鼠标快速经过会频闪；有延时保护的则不会，可以避免不必要的接口请求和界面变化</P>
    <ScSpan {...{
      style: {
        background: stateInUnprotected ? '#0c0' : '#f60'
      },
      onMouseEnter: handleMouseEnterUnprotected,
      onMouseLeave: handleMouseLeaveUnprotected
    }}>延时保护：无</ScSpan>
    <ScSpan {...{
      style: {
        background: stateInProtected ? '#0c0' : '#00c'
      },
      onMouseEnter,
      onMouseLeave
    }}>延时保护：有</ScSpan>
    <H2>配合 active，鼠标移入后延时触发 active（能够被 click 抢先）</H2>
    <P>当前状态：<kbd>{statePlaying ? '播放中' : '暂停'}</kbd>，移入短暂停留将暂停播放，点击切换状态</P>
    <ScActiveButton {...{
      style: {
        background: statePlaying ? '#90f' : '#fc0'
      },
      onMouseEnter: onMouseEnterPlay,
      onMouseLeave: onMouseLeavePlay,
      onClick: onActiveChange
    }}>{statePlaying ? '⏸' : '▶'}</ScActiveButton>
  </>;
}
