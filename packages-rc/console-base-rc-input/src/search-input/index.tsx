import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  ISearchInputProps
} from '../types';
import Input from '../with-model';

const ScIcon = styled(Icon)`
  font-size: 13px;
`;

export default function SearchInput(props: ISearchInputProps): JSX.Element {
  return <Input {...{
    hasClear: true,
    ...props,
    innerLeft: <ScIcon type="search" />
  }} />;
}
