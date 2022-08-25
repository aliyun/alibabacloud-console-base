import {
  HTMLAttributes,
  ReactNode
} from 'react';

import {
  PackageInfoContent
} from '@alicloud/demo-rc-elements';

export interface IDemoHelperRightItemProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onMouseEnter' | 'onMouseLeave'> {
  label: string | JSX.Element;
  tip: string | JSX.Element;
  tipWidth?: number;
}

export interface IRightItemWithKey extends IDemoHelperRightItemProps {
  key: string | number;
}

export interface IDemoHelperTopNavProps {
  pkgInfo: PackageInfoContent | null;
  rightItems?: IRightItemWithKey[];
  children?: ReactNode;
}