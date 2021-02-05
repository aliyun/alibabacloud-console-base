import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderTransparent
} from '@alicloud/console-base-theme';

import {
  IPropsMarkWithType
} from '../../types';
import getLabel from '../../util/get-label';
import getCssOfType from '../../util/get-css-of-type';
import getCssOfAlign from '../../util/get-css-of-align';

const ScMark = styled.span<IPropsMarkWithType>`
  display: inline-block;
  padding: 2px 4px;
  border-radius: 2px;
  line-height: 1.5;
  font-family: 'PingFang SC', 'Microsoft Yahei', Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  ${mixinBorderTransparent}
  ${props => getCssOfType(props.type)}
  ${props => getCssOfAlign(props.align)}
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
