import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  IPropsItem
} from '../../types';

const ScItemPlain = styled.span`
  display: inline-block;
  cursor: default;
  vertical-align: middle;
  ${mixinTextTertiary}
`;

export default function BreadcrumbItem(props: IPropsItem): JSX.Element {
  if (props.href || props.onClick) {
    return <Button {...{
      ...props,
      theme: ButtonTheme.TEXT_SECONDARY,
      size: ButtonSize.NONE
    }} />;
  }
  
  return <ScItemPlain>{props.label}</ScItemPlain>;
}
