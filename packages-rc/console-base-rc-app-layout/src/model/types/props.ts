import {
  HTMLAttributes
} from 'react';

import {
  AsideNavProps
} from '@alicloud/console-base-rc-aside-nav';

export interface IModelProps extends HTMLAttributes<HTMLDivElement> {
  asideNavProps?: AsideNavProps;
}
