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

export interface IDemoHelperRainbowTextWithTooltip extends Omit<HTMLAttributes<HTMLSpanElement>, 'onMouseEnter' | 'onMouseLeave'> {
  label: string | JSX.Element;
  tip: string | JSX.Element;
  tipWidth?: number;
  tipAlignRight?: boolean;
}

export interface IDemoHelperRightItemProps extends Omit<IDemoHelperRainbowTextWithTooltip, 'tipAlignRight'> {}

export interface IRightItemWithKey extends IDemoHelperRightItemProps {
  key: string | number;
}

export interface IDemoHelperTopNavProps extends Omit<TopNavProps, 'logo' | 'customLeft' | 'customRight' | 'menus'> {
  logo?: string;
  pkgInfo: PackageInfoContent | null;
  rightItems?: IRightItemWithKey[];
  children?: ReactNode;
}