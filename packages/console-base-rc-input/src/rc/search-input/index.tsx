import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IProps
} from '../../types';
import Input from '../input';

interface IPropsScIcon {
  highlighted?: boolean;
}

const ScIcon = styled(Icon)<IPropsScIcon>`
  font-size: 16px;
  color: ${props => (props.highlighted ? COLOR.TEXT_EMPHASIS : COLOR.TEXT_DISABLED)};
`;

function renderIcon(focused: boolean): JSX.Element {
  return <ScIcon type="search" highlighted={focused} />;
}

export default function SearchInput(props: IProps): JSX.Element {
  return <Input {...{
    round: true,
    ...props,
    innerLeft: renderIcon
  }} />;
}
