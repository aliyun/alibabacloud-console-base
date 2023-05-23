import React from 'react';
import styled from 'styled-components';

import {
  FormItemProps,
  useProps
} from '@alicloud/rc-model-form';

import {
  HEIGHT_FORM_CONTROL
} from '../../../../../const';

import ItemLabel from './item-label';
import ItemContent from './item-content';

interface IScProps {
  $dense?: boolean;
}

const ScItem = styled.div<IScProps>`
  display: flex;
  margin-bottom: ${props => (props.$dense ? 8 : 16)}px;
  line-height: ${HEIGHT_FORM_CONTROL}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function FormItem({
  label,
  content,
  help
}: FormItemProps): JSX.Element {
  const {
    dense
  } = useProps();
  
  return <ScItem $dense={dense}>
    <ItemLabel label={label} />
    <ItemContent content={content} help={help} />
  </ScItem>;
}
