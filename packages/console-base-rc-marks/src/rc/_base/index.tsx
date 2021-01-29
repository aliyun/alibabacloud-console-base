import React from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextWhite,
  mixinBgDanger
} from '@alicloud/console-base-theme';

import {
  IPropsMarkWithType
} from '../../types';
import getLabel from '../../util/get-label';

function getCssAlign(align: string): FlattenSimpleInterpolation {
  switch (align) {
    case 'left':
      return css`
        transform-origin: left center;
      `;
    case 'right':
      return css`
        transform-origin: right center;
      `;
    default:
      return null; // 默认 center center
  }
}

const ScMark = styled.span<IPropsMarkWithType>`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 2px;
  line-height: 1.5;
  font-family: 'PingFang SC', 'Microsoft Yahei', Arial, sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  transform: scale(0.8);
  ${mixinTextWhite}
  ${mixinBgDanger}
  ${props => getCssAlign(props.align)}
`;

export default function MarkBase({
  type,
  align,
  component
}: IPropsMarkWithType): JSX.Element {
  return <ScMark {...{
    as: component,
    align,
    type
  }}>{getLabel(type)}</ScMark>;
}
