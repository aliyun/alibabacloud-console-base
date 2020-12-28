import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinBorderPrimaryTop
} from '@alicloud/console-base-theme';

import {
  IDialogButtonProps
} from '../../../types';
import {
  EDialogMode
} from '../../../const';
import {
  useDialogButtons,
  usePropMode
} from '../../../model';

import FooterButton from './button';

interface IScProps {
  mode?: EDialogMode;
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
  padding-bottom: ${SIZE.PADDING_X_DIALOG * 2 / 3}px;
  text-align: right;
`;

const cssSlide = css`
  justify-content: flex-start;
  height: ${SIZE.HEIGHT_DIALOG_SLIDE_FOOTER}px;
  ${mixinBorderPrimaryTop};
`;

const ScFooter = styled.footer<IScProps>`
  ${cssCommon};
  ${props => (props.mode === EDialogMode.SLIDE ? cssSlide : cssNormal)};
`;

export default function Footer(): JSX.Element {
  const mode = usePropMode();
  const buttons: IDialogButtonProps[] = useDialogButtons();
  
  return buttons.length ? <ScFooter {...{
    mode
  }}>
    {buttons.map((v, i): JSX.Element => <FooterButton key={v.spm || i} {...v} />)}
  </ScFooter> : null;
}
