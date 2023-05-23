import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinBorderTertiaryBottom,
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  DialogMode,
  useDialogMode,
  useDialogTitle,
  useDialogTitleExtra
} from '../../../model';

interface IScProps {
  $mode?: DialogMode;
}

const cssNormal = css`
  padding: ${SIZE.PADDING_X_DIALOG}px ${SIZE.PADDING_X_DIALOG * 2 + 8}px 0 ${SIZE.PADDING_X_DIALOG}px;
  min-height: 48px;
`;

// slide 和 slide_up 共用
const cssSlide = css`
  padding: 0 ${SIZE.PADDING_X_DIALOG * 2 + 8}px 0 ${SIZE.PADDING_X_DIALOG}px;
  height: ${SIZE.HEIGHT_DIALOG_SLIDE_HEADER}px;
  ${mixinBorderTertiaryBottom}
`;

const ScHeader = styled.header<IScProps>`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  ${props => (props.$mode !== DialogMode.NORMAL ? cssSlide : cssNormal)}
`;
const ScTitle = styled.h4<IScProps>`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  ${mixinTextPrimary}
  ${mixinTypoEllipsis}
  
  ${props => (props.$mode !== DialogMode.NORMAL ? css`
    height: ${SIZE.HEIGHT_DIALOG_SLIDE_HEADER}px;
    line-height: ${SIZE.HEIGHT_DIALOG_SLIDE_HEADER}px;
  ` : null)}
`;
const ScTitleExtra = styled.div`
  ${mixinTextSecondary}
`;

export default function Header(): JSX.Element {
  const dialogMode = useDialogMode();
  const dialogTitle = useDialogTitle();
  const dialogTitleExtra = useDialogTitleExtra();
  
  return <ScHeader {...{
    $mode: dialogMode
  }}>
    <ScTitle {...{
      $mode: dialogMode
    }}>{dialogTitle}</ScTitle>
    {dialogTitleExtra ? <ScTitleExtra>{dialogTitleExtra}</ScTitleExtra> : null}
  </ScHeader>;
}
