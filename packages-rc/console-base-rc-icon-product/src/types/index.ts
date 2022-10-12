import {
  HTMLAttributes
} from 'react';

import {
  EIconType
} from '../enum';

export type TIconProductType = keyof typeof EIconType; // export in case that anyone wants type casting

export interface IPropsIconProduct extends HTMLAttributes<HTMLElement> {
  type: string;
}
