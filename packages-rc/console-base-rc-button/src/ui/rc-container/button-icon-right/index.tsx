import React from 'react';

import {
  usePropsCustom
} from '../../../model';
import {
  renderIcon
} from '../../util';
import {
  ButtonIconWrapper
} from '../../rc';

export default function ButtonIconRight(): JSX.Element | null {
  const {
    iconSpacing,
    iconRight,
    iconRightRotate,
    classNameForIconRight
  } = usePropsCustom();
  const jsxIcon = renderIcon(iconRight, iconRightRotate);
  
  return jsxIcon ? <ButtonIconWrapper {...{
    className: classNameForIconRight,
    iconSpacing
  }}>{jsxIcon}</ButtonIconWrapper> : null;
}
