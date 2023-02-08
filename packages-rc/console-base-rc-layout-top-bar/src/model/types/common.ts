import {
  ReactElement
} from 'react';

import {
  IconType
} from '@alicloud/console-base-rc-icon';

export interface IButtonLabel { // TODO 不如直接 label
  icon?: IconType;
  iconRotate?: number;
  html?: string;
  text?: string | ReactElement;
}