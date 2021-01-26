import React from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextWhite,
  mixinBgInfo,
  mixinBgSuccess,
  mixinBgWarning,
  mixinBgError,
  mixinBgDanger
} from '@alicloud/console-base-theme';

import {
  IPropsMarkWithType
} from '../../types';
import {
  EMarkType
} from '../../const';
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

function getCssBg(type: EMarkType): FlattenSimpleInterpolation {
  switch (type) {
    case EMarkType.NEW:
      return mixinBgDanger;
    case EMarkType.HOT:
      return mixinBgError;
    case EMarkType.UPDATE:
      return mixinBgInfo;
    case EMarkType.ALPHA:
      return mixinBgWarning;
    case EMarkType.BETA:
      return mixinBgSuccess;
    case EMarkType.PUBLIC_BETA:
      return mixinBgDanger;
    default:
      return null;
  }
}

const ScMark = styled.span<IPropsMarkWithType>`
  display: inline-block;
  padding: 2px 6px;
  line-height: 1.5;
  font-family: 'PingFang SC', 'Microsoft Yahei', Arial, sans-serif;
  font-size: 12px;
  text-shadow: 1px 1px 0 #999;
  letter-spacing: 2px;
  transform: scale(0.7);
  ${mixinTextWhite}
  ${props => getCssAlign(props.align)}
  ${props => getCssBg(props.type)}
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
