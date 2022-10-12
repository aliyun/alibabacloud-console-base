import React from 'react';

import {
  usePropsCustom
} from '../../model';
import {
  renderIcon
} from '../../util';
import ButtonIconWrapper from '../../rc/button-icon-wrapper';

export default function ButtonIconRight(): JSX.Element | null {
  const {
    iconRight,
    iconSpacing,
    classNameForIconRight
  } = usePropsCustom();
  const jsxIcon = renderIcon(iconRight);
  
  return jsxIcon ? <ButtonIconWrapper {...{
    className: classNameForIconRight,
    iconSpacing
  }}>{jsxIcon}</ButtonIconWrapper> : null;
}
