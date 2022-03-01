import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  IModelProps,
  usePropsCustom
} from '../../model';
import {
  getStyleIconSpacing,
  renderIcon
} from '../../util';

const ScButtonIcon = styled.span<Partial<IModelProps>>`
  margin: 0 ${getStyleIconSpacing}px;
  min-width: 12px;
  text-align: left;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export default function ButtonIconLeft(): JSX.Element | null {
  const {
    loading,
    iconLeft,
    iconSpacing,
    classNameForIconLeft
  } = usePropsCustom();
  const jsxIcon = loading ? <Icon type="loading" /> : renderIcon(iconLeft);
  
  return jsxIcon ? <ScButtonIcon {...{
    className: classNameForIconLeft,
    iconSpacing
  }}>{jsxIcon}</ScButtonIcon> : null;
}