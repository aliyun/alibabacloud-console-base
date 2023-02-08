import {
  HTMLAttributes
} from 'react';

import {
  EIconType
} from '../enum';

export type TIconType = keyof typeof EIconType; // export in case that anyone wants type casting

export interface IScPropsIcon {
  $type: TIconType;
  $rotate?: number;
}

export interface IPropsIconPure {
  type: TIconType;
  rotate?: number;
}

export interface IPropsIcon extends IPropsIconPure, HTMLAttributes<HTMLElement> {}
