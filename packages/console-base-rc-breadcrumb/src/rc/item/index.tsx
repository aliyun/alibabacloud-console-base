import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';
import {
  typo
} from '@alicloud/console-base-styled-mixin';

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
  color: ${COLOR.TEXT_CAPTION};
  color: var(--cb-color-text-caption, ${COLOR.TEXT_CAPTION});
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
