import React, {
  ReactNode
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBorderRadiusXs,
  mixinTextSecondary,
  mixinShadowL
} from '@alicloud/console-base-theme';

import {
  AlertTheme,
  useProps,
  usePropsDom
} from '../../../model';
import {
  getCssBd,
  getCssBg
} from '../../util';

interface IProps {
  children: ReactNode;
}

interface IScPropsAlert {
  $theme: AlertTheme;
  $toast?: boolean;
  $dense?: boolean;
}

const ScAlert = styled.div<IScPropsAlert>`
  display: flex;
  align-items: flex-start;
  position: relative;
  opacity: ${props => (props.$toast ? 0.85 : 1)};
  padding: ${props => (props.$dense ? 4 : 12)}px 12px;
  transition: all ease-in-out 250ms;
  ${mixinTextSecondary}
  ${props => (props.$toast ? null : mixinBorderRadiusXs)}
  ${props => (props.$toast ? mixinShadowL : null)}
  ${props => getCssBg(props.$theme, props.$toast)}
  ${props => getCssBd(props.$theme, props.$toast)}
  ${props => (props.$toast ? css`
    border-left-width: 4px;
  ` : null)}

  &.enter,
  &.exit-active {
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export default function Alert({
  children
}: IProps): JSX.Element {
  const {
    theme,
    toast,
    dense
  } = useProps();
  const propsDom = usePropsDom();
  
  return <ScAlert {...{
    $theme: theme,
    $toast: toast,
    $dense: dense,
    role: 'alert',
    ...propsDom
  }}>
    {children}
  </ScAlert>;
}
