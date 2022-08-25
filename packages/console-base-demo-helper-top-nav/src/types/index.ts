import {
  HTMLAttributes,
  ReactNode
} from 'react';

import {
  PackageInfoContent
} from '@alicloud/demo-rc-elements';
import {
  TopNavProps
} from '@alicloud/console-base-rc-top-nav';

export interface IDemoHelperRightItemProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onMouseEnter' | 'onMouseLeave'> {
  label: string | JSX.Element;
  tip: string | JSX.Element;
  tipWidth?: number;
}

export interface IRightItemWithKey extends IDemoHelperRightItemProps {
  key: string | number;
}

export interface IDemoHelperTopNavProps extends Omit<TopNavProps, 'logo' | 'customLeft' | 'customRight' | 'menus'> {
  logo?: string;
  pkgInfo: PackageInfoContent | null;
  rightItems?: IRightItemWithKey[];
  children?: ReactNode;
}