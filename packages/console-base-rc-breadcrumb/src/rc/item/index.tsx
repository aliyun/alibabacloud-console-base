import React from 'react';
import styled from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';

import {
  IPropsItem
} from '../../types';

const ScItemLink = styled.a`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  ${typo.linkSecondary};
`;

const ScItemPlain = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${typo.textCaption};
`;

export default function BreadcrumbItem({
  label,
  href,
  onClick,
  ...props
}: IPropsItem): JSX.Element {
  if (href || onClick) {
    return <ScItemLink {...{
      href,
      onClick,
      ...props
    }}>{label}</ScItemLink>;
  }
  
  return <ScItemPlain {...props}>{label}</ScItemPlain>;
}
