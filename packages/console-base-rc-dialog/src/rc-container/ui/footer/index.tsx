import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR,
  DIALOG
} from '@alicloud/console-base-styled-mixin';

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
  padding: 0 ${DIALOG.PADDING}px;
  box-sizing: border-box;
`;

const cssNormal = css`
  justify-content: flex-end;
  padding-top: ${DIALOG.PADDING * 2 / 3}px;
  padding-bottom: ${DIALOG.PADDING * 2 / 3}px;
  text-align: right;
`;

const cssSlide = css`
  justify-content: flex-start;
  border-top: 1px solid ${COLOR.LINE_LIGHT};
  height: ${DIALOG.SLIDE_FOOTER_HEIGHT}px;
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
