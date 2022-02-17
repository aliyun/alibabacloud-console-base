import {
  HTMLAttributes
} from 'react';

import {
  EIconType
} from '../enum';

export type IconProductType = keyof typeof EIconType; // export in case that anyone wants type casting

export interface IPropsIconProduct extends HTMLAttributes<HTMLElement> {
  type: string;
}
