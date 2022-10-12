import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  usePropsCustom
} from '../../model';
import {
  renderIcon
} from '../../util';
import ButtonIconWrapper from '../../rc/button-icon-wrapper';

export default function ButtonIconLeft(): JSX.Element | null {
  const {
    loading,
    iconLeft,
    iconSpacing,
    classNameForIconLeft
  } = usePropsCustom();
  const jsxIcon = loading ? <Icon type="loading" /> : renderIcon(iconLeft);
  
  return jsxIcon ? <ButtonIconWrapper {...{
    className: classNameForIconLeft,
    iconSpacing
  }}>{jsxIcon}</ButtonIconWrapper> : null;
}