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

const ScMarkBase = styled.span`
  display: inline-block;
  padding: 0 1px;
  line-height: 1.2;
  font-family: Arial, sans-serif;
  font-size: 0.85em;
  font-weight: 400;
  letter-spacing: 0.5px;
  ${mixinBorderTransparent}
`;

const ScMark = styled(ScMarkBase)<IPropsMarkWithType>`
  ${props => getCssOfType(props.type, props.hollow)}
  ${props => getCssOfAlign(props.align)}
`;

export default function MarkBase({
  type,
  align,
  component,
  ...props
}: IPropsMarkWithType): JSX.Element {
  return <ScMark {...{
    as: component,
    align,
    type,
    ...props
  }}>{getLabel(type)}</ScMark>;
}
