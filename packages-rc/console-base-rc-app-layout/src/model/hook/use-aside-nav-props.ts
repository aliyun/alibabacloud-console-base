import {
  useMemo
} from 'react';

import {
  AsideNavProps
} from '@alicloud/console-base-rc-aside-nav';

import useModelProps from './_use-model-props';
import useCollapsed from './use-collapsed';
import useHandleCollapsedChange from './use-handle-collapsed-change';

export default function useAsideNavProps(): AsideNavProps | null {
  const {
    asideNavProps
  } = useModelProps();
  const collapsed = useCollapsed();
  const handleCollapsedChange = useHandleCollapsedChange();
  
  return useMemo(() => {
    return asideNavProps ? {
      ...asideNavProps,
      collapsed,
      onCollapsedChange: handleCollapsedChange
    } : null;
  }, [asideNavProps, collapsed, handleCollapsedChange]);
}
