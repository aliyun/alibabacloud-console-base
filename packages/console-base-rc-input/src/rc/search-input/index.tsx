import React from 'react';
import styled, {
  css
} from 'styled-components';

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
  ${props => (props.highlighted ? css`
    color: ${COLOR.TEXT_EMPHASIS};
    color: var(--cb-color-text-emphasis, ${COLOR.TEXT_EMPHASIS});
  ` : css`
    color: ${COLOR.TEXT_DISABLED};
    color: var(--cb-color-text-disabled, ${COLOR.TEXT_DISABLED});
  `)};
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
