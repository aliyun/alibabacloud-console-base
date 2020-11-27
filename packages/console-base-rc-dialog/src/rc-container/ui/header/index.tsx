import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR,
  DIALOG,
  typo
} from '@alicloud/console-base-styled-mixin';

import {
  EDialogMode
} from '../../../const';
import {
  usePropMode,
  useDialogTitle
} from '../../../model';

interface IScProps {
  mode?: EDialogMode;
}

const cssCommon = css`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 ${DIALOG.PADDING * 2 + DIALOG.SIZE_X}px 0  ${DIALOG.PADDING}px;
  box-sizing: border-box;
  color: ${COLOR.TEXT_TITLE};
`;

const cssNormal = css`
  padding-top: ${DIALOG.PADDING * 2 / 3}px;
`;

// slide 和 slide-up 共用
const cssSlide = css`
  border-bottom: 1px solid ${COLOR.LINE_LIGHT};
  height: ${DIALOG.SLIDE_HEADER_HEIGHT}px;
`;

const ScHeader = styled.header<IScProps>`
  ${cssCommon};
  ${props => (props.mode !== EDialogMode.NORMAL ? cssSlide : cssNormal)};
  
  h4 {
    flex: 1;
    margin: 0;
    padding: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    ${typo.ellipsis};
  }
`;

export default function Header(): JSX.Element | null {
  const title = useDialogTitle();
  const mode = usePropMode();
  
  return mode !== EDialogMode.NORMAL || title ? <ScHeader {...{
    mode
  }}>
    <h4>{title}</h4>
  </ScHeader> : null;
}
