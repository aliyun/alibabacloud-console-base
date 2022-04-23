import React from 'react';

import {
  New,
  PublicBeta,
  Beta,
  Alpha
} from '@alicloud/console-base-rc-marks';

import {
  INavItemProps
} from '../../model';
import NavItemIconRight from '../nav-item-icon-right';

export default function renderMark(mark: INavItemProps['mark']): JSX.Element | undefined {
  switch (mark) {
    case 'external':
      return <NavItemIconRight type="external" />;
    case 'new':
      return <New />;
    case 'publicBeta':
      return <PublicBeta />;
    case 'beta':
      return <Beta />;
    case 'alpha':
      return <Alpha />;
    default:
      return undefined;
  }
}