import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary,
  mixinLinkSecondary
} from '@alicloud/console-base-theme';

import {
  IPropsItem
} from '../../types';

const ScItemLink = styled.a`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  ${mixinLinkSecondary};
`;

const ScItemPlain = styled.span`
  display: inline-block;
  vertical-align: middle;
  ${mixinTextTertiary};
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
