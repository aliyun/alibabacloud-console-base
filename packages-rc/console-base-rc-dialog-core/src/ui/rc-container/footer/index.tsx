import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  DialogMode,
  DialogButtonProps,
  useDialogMode,
  useDialogButtons
} from '../../../model';

import FooterButton from './button';

interface IScProps {
  $mode?: DialogMode;
}

const cssCommon = css`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 ${SIZE.PADDING_X_DIALOG}px;
  box-sizing: border-box;
`;

const cssNormal = css`
  justify-content: flex-end;
  padding-top: ${SIZE.PADDING_X_DIALOG * 2 / 3}px;
  padding-bottom: ${SIZE.PADDING_X_DIALOG}px;
  text-align: right;
`;

const cssSlide = css`
  justify-content: flex-start;
  height: ${SIZE.HEIGHT_DIALOG_SLIDE_FOOTER}px;
  ${mixinBorderTertiaryTop}
`;

const ScFooter = styled.footer<IScProps>`
  ${cssCommon}
  ${props => (props.$mode === DialogMode.SLIDE ? cssSlide : cssNormal)}
`;

export default function Footer(): JSX.Element | null {
  const dialogMode = useDialogMode();
  const buttons: DialogButtonProps[] = useDialogButtons();
  
  return buttons.length ? <ScFooter {...{
    $mode: dialogMode
  }}>
    {buttons.map((v, i): JSX.Element => <FooterButton key={v.spm || i} {...v} />)}
  </ScFooter> : null;
}
