import {
  HTMLAttributes
} from 'react';

import {
  AsideNavProps
} from '@alicloud/console-base-rc-aside-nav';

export interface IModelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 不传，或显式 null 将不渲染侧边栏
   */
  asideNavProps?: AsideNavProps | null;
}
