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
  EDialogMode
} from '../../../enum';
import {
  useProps,
  useDialogTitle,
  useDialogTitleExtra
} from '../../../model';

interface IScProps {
  mode?: EDialogMode;
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
  line-height: 24px;
  ${props => (props.mode !== EDialogMode.NORMAL ? cssSlide : cssNormal)}
`;

const ScTitle = styled.h4`
  flex: 1;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  ${mixinTextPrimary}
  ${mixinTypoEllipsis}
`;
const ScTitleExtra = styled.div`
  ${mixinTextSecondary}
`;

export default function Header(): JSX.Element {
  const {
    mode
  } = useProps();
  const title = useDialogTitle();
  const titleExtra = useDialogTitleExtra();
  
  return <ScHeader {...{
    mode: mode as EDialogMode
  }}>
    {title ? <ScTitle>{title}</ScTitle> : null}
    {titleExtra ? <ScTitleExtra>{titleExtra}</ScTitleExtra> : null}
  </ScHeader>;
}
