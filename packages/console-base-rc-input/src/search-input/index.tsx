import React from 'react';
import styled from 'styled-components';

import {
  mixinTextEmphasis,
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  ModelProps
} from '../model';
import Input from '../rc-container';

interface IPropsScIcon {
  highlighted?: boolean;
}

const ScIcon = styled(Icon)<IPropsScIcon>`
  font-size: 16px;
  ${props => (props.highlighted ? mixinTextEmphasis : mixinTextTertiary)}
`;

function renderIcon(focused: boolean, hovered: boolean): JSX.Element {
  return <ScIcon type="search" highlighted={focused || hovered} />;
}

export default function SearchInput(props: ModelProps): JSX.Element {
  return <Input {...{
    round: true,
    theme: 'brand',
    ...props,
    innerLeft: renderIcon
  }} />;
}
