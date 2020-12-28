import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextEmphasis,
  mixinTextTertiary
} from '@alicloud/console-base-theme';
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
  ${props => (props.highlighted ? mixinTextEmphasis : mixinTextTertiary)};
`;

function renderIcon(focused: boolean, hovered: boolean): JSX.Element {
  return <ScIcon type="search" highlighted={focused || hovered} />;
}

export default function SearchInput(props: IProps): JSX.Element {
  return <Input {...{
    round: true,
    weakFocusStyle: true,
    ...props,
    innerLeft: renderIcon
  }} />;
}
