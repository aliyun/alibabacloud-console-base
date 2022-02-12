import React from 'react';
import styled from 'styled-components';

import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  IModelProps,
  usePropsCustom
} from '../../model';
import {
  getStyleIconSpacing
} from '../../util';

interface IProps {
  left?: boolean;
}

const ScButtonIcon = styled.span<Partial<IModelProps>>`
  margin: 0 ${getStyleIconSpacing}px;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

function renderIcon(icon?: IconType | JSX.Element): JSX.Element | null {
  if (!icon) {
    return null;
  }
  
  if (React.isValidElement(icon)) {
    return icon;
  }
  
  return <Icon type={icon as IconType} />;
}

export default function ButtonIcon({
  left
}: IProps): JSX.Element | null {
  const {
    loading,
    iconLeft,
    iconRight,
    iconSpacing,
    classNameForIconLeft,
    classNameForIconRight
  } = usePropsCustom();
  const jsxIcon = left && loading ? <Icon type="loading" /> : renderIcon(left ? iconLeft : iconRight);
  
  return jsxIcon ? <ScButtonIcon {...{
    className: left ? classNameForIconLeft : classNameForIconRight,
    iconSpacing
  }}>{jsxIcon}</ScButtonIcon> : null;
}
