import {
  HTMLAttributes
} from 'react';

import {
  EIconType
} from '../const';

export type TIconType = keyof typeof EIconType; // export in case that anyone wants type casting

export interface IPropsIcon extends HTMLAttributes<HTMLElement> {
  type: TIconType;
  rotate?: number;
}
