import {
  HTMLAttributes
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export interface IPropsItem extends Omit<ButtonProps, 'theme' | 'size'> {}

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  items?: IPropsItem[];
}
