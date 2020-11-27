import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  LAYOUT
} from '@alicloud/console-base-styled-mixin';

import {
  EDialogMode
} from '../../const';
import {
  useRefDialog,
  usePropMode,
  useDialogWidth,
  useDialogZIndex,
  usePropClosable,
  usePropClassName,
  useRefContent,
  useStateActive
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
`;

const cssSlide = css<IScDialogProps>`
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(${props => (props.active ? '0' : '100%')});
  
  .hasTopbar & {
    top: ${LAYOUT.TOP_BAR_HEIGHT}px;
  }
`;

const cssSlideUp = css<IScDialogProps>`
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => (props.active ? '0' : '100%')});
`;

// 其实 HTML 有 dialog 元素，但浏览器支持不佳，目前只好用 div
const ScDialog = styled.div<IScDialogProps>`
  position: fixed;
  opacity: ${props => (props.active ? 1 : 0.66)};
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 4px 2px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #fff;
  min-width: 320px;
  max-width: 100%;
  font-size: 12px;
  transition: all ease-in 200ms;
  ${props => {
    switch (props.mode) {
      case EDialogMode.SLIDE:
        return cssSlide;
      case EDialogMode.SLIDE_UP:
        return cssSlideUp;
      default:
        return cssNormal;
    }
  }};
`;

/**
 * Dialog 本 Dialog
 */
export default function DialogUi(): JSX.Element {
  const refDialog = useRefDialog();
  const refContent = useRefContent();
  const className = usePropClassName();
  const closable = usePropClosable();
  const mode = usePropMode();
  const width = useDialogWidth();
  const active = useStateActive();
  const zIndex = useDialogZIndex();
  
  return <ScDialog {...{
    ref: refDialog,
    'aria-modal': true,
    role: 'dialog',
    className,
    tabIndex: 0,
    mode,
    active,
    style: {
      zIndex,
      width
    }
  }}>
    <Header />
    <Content ref={refContent} />
    <Footer />
    {closable ? <X /> : null}
  </ScDialog>;
}
