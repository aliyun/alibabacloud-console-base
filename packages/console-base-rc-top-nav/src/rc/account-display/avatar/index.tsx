import React from 'react';
import styled from 'styled-components';

import {
  mixinBgSecondary,
  mixinBorderTransparent,
  mixinBorderBrandColor
} from '@alicloud/console-base-theme';

import {
  SIZE_AVATAR
} from '../../../const';

const ScImg = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: ${SIZE_AVATAR}px;
  height: ${SIZE_AVATAR}px;
  vertical-align: middle;
  ${mixinBgSecondary};
`;
const ScA = styled.a`
  display: block;
  border-radius: 50%;
  transition: all 250ms ease-out;
  ${mixinBorderTransparent}
  
  &:hover {
    ${mixinBorderBrandColor}
  }
`;

interface IProps {
  avatar: string;
  href?: string;
}

export default function Avatar({
  avatar,
  href
}: IProps): JSX.Element {
  const jsxImg = <ScImg src={avatar} alt="" />;
  
  if (!href) {
    return jsxImg;
  }
  
  return <ScA href={href} target="_blank" rel="noopener noreferrer">{jsxImg}</ScA>;
}