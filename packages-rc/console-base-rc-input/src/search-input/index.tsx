import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  ModelProps
} from '../model';
import Input from '../with-model';

const ScIcon = styled(Icon)`
  font-size: 13px;
`;

interface IProps extends Omit<ModelProps, 'innerLeft'> {}

export default function SearchInput(props: IProps): JSX.Element {
  return <Input {...{
    hasClear: true,
    ...props,
    innerLeft: <ScIcon type="search" />
  }} />;
}
