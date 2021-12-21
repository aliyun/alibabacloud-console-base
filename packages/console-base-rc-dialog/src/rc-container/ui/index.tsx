import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinTextSecondary,
  mixinBgPrimary,
  mixinBorderTertiary,
  mixinBorderRadiusS,
  mixinShadowL,
  mixinShadowLUp
} from '@alicloud/console-base-theme';

import {
  EDialogMode
} from '../../const';
import {
  useProps,
  useRefDialog,
  useRefDialogContent,
  useStateActive,
  useDialogStyle
} from '../../model';

import Header from './header';
import Content from './content';
import Footer from './footer';
import X from './x';

interface IScDialogProps {
  mode?: EDialogMode;
  active: boolean;
}

const cssNormal = css<IScDialogProps>`
  top: ${props => (props.active ? '50%' : '35%')};
  left: 50%;
  min-height: 80px;
  transform: translate(-50%, -50%);
  ${mixinBorderRadiusS}
`;

const cssSlide = css<IScDialogProps>`
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(${props => (props.active ? '0' : '100%')});
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    top: ${SIZE.HEIGHT_TOP_NAV}px;
  }
`;

const cssSlideUp = css<IScDialogProps>`
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(${props => (props.active ? '0' : '100%')});
  ${mixinShadowLUp}
`;

// 其实 HTML 有 dialog 元素，但浏览器支持不佳，目前只好用 div
const ScDialog = styled.div<IScDialogProps>`
  position: fixed;
  opacity: ${props => (props.active ? 1 : 0.66)};
  outline: none;
  min-width: 320px;
  max-width: 100%;
  font-size: 12px;
  transition: all ease-in 200ms;
  ${mixinTextSecondary}
  ${mixinBgPrimary}
  ${mixinBorderTertiary}
  ${mixinShadowL}
  ${props => {
    switch (props.mode) {
      case EDialogMode.SLIDE:
        return cssSlide;
      case EDialogMode.SLIDE_UP:
        return cssSlideUp;
      default:
        return cssNormal;
    }
  }}
`;

/**
 * Dialog 本 Dialog
 */
export default function DialogUi(): JSX.Element {
  const {
    className,
    mode,
    closable
  } = useProps();
  const refDialog = useRefDialog();
  const refDialogContent = useRefDialogContent();
  const active = useStateActive();
  const style = useDialogStyle();
  
  return <ScDialog {...{
    ref: refDialog,
    'aria-modal': true,
    role: 'dialog',
    className,
    tabIndex: 0,
    mode: mode as EDialogMode,
    active,
    style
  }}>
    <Header />
    <Content ref={refDialogContent} />
    <Footer />
    {closable ? <X /> : null}
  </ScDialog>;
}
