import React from 'react';
import styled from 'styled-components';

import {
  IModelProps,
  usePropsCustom
} from '../../model';
import {
  getStyleIconSpacing,
  renderIcon
} from '../../util';

const ScButtonIconRight = styled.span<Partial<IModelProps>>`
  margin-left: ${getStyleIconSpacing}px;
  text-align: right;
  
  &:first-child {
    margin-left: 0;
  }
`;

export default function ButtonIconRight(): JSX.Element | null {
  const {
    iconRight,
    iconSpacing,
    classNameForIconRight
  } = usePropsCustom();
  const jsxIcon = renderIcon(iconRight);
  
  return jsxIcon ? <ScButtonIconRight {...{
    className: classNameForIconRight,
    iconSpacing
  }}>{jsxIcon}</ScButtonIconRight> : null;
}
