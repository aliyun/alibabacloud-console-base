import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  ModelProps
} from '../model';
import Input from '../rc-container';

const ScIcon = styled(Icon)`
  font-size: 14px;
`;

export default function SearchInput(props: ModelProps): JSX.Element {
  return <Input {...{
    ...props,
    innerLeft: <ScIcon type="search" />
  }} />;
}
