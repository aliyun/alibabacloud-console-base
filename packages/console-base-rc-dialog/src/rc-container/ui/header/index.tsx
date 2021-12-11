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
} from '../../../const';
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

export default function Header(): JSX.Element | null {
  const {
    mode,
    closable
  } = useProps();
  const title = useDialogTitle();
  const titleExtra = useDialogTitleExtra();
  let noHeader = false;
  
  // SLIDE+ 模式下，既没有 title 有没有 X 才可以不展示整条 header
  if (!title && !closable) {
    noHeader = true;
  } else if (!title) {
    noHeader = mode === EDialogMode.NORMAL;
  }
  
  return noHeader ? null : <ScHeader {...{
    mode: mode as EDialogMode
  }}>
    <ScTitle>{title}</ScTitle>
    {titleExtra ? <ScTitleExtra>{titleExtra}</ScTitleExtra> : null}
  </ScHeader>;
}
