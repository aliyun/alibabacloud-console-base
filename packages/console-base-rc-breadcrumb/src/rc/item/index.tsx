import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';

import {
  IPropsItem
} from '../../types';

// 加 :link :visited 是为了防止被最基础的样式所覆盖
const ScItemLink = styled.a`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  color: ${COLOR.TEXT_SECONDARY};
  
  &:hover {
    text-decoration: none;
    color: ${COLOR.LINK};
  }
  
  &:link,
  &:visited {
    color: ${COLOR.TEXT_SECONDARY};
  }
  
  &:active,
  &:link:hover {
    color: ${COLOR.LINK};
  }
`;

const ScItemPlain = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${COLOR.TEXT_CAPTION};
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
