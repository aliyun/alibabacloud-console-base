import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBorderRadiusXs,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinShadowL
} from '@alicloud/console-base-theme';

import {
  EAlertTheme
} from '../../enum';
import {
  IProps
} from '../../types';
import {
  getCssBd,
  getCssBg
} from '../../util';

import AlertIcon from './alert-icon';

interface IScPropsAlert {
  theme: EAlertTheme;
  toast?: boolean;
}

const ScAlert = styled.div<IScPropsAlert>`
  display: flex;
  align-items: flex-start;
  padding: 12px;
  ${mixinTextSecondary}
  ${props => (props.toast ? null : mixinBorderRadiusXs)}
  ${props => (props.toast ? mixinShadowL : null)}
  ${props => getCssBg(props.theme, props.toast)}
  ${props => getCssBd(props.theme, props.toast)}
  ${props => (props.toast ? css`
    border-left-width: 4px;
  ` : null)}
`;

const ScAlertTitle = styled.div`
  margin-bottom: 4px;
  font-weight: 600;
  ${mixinTextPrimary}
`;

export default function Alert({
  theme = EAlertTheme.HELP,
  title,
  message,
  toast,
  closable,
  onClose,
  ...props
}: IProps): JSX.Element {
  return <ScAlert {...{
    theme,
    toast,
    role: 'alert',
    ...props
  }}>
    <AlertIcon theme={theme} />
    <div>
      {title ? <ScAlertTitle>{title}</ScAlertTitle> : null}
      {message}
    </div>
  </ScAlert>;
}