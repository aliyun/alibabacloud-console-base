import React from 'react';

import Tabs, {
  TabsVariant
} from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_CANCEL, CLASS_J_RND_HANDLE,
  CLASS_J_RND_PREVENT_CLICK,
  useProps,
  useRndDraggingDisabled,
  useHandleTogglePinned
} from '../../../model';

import Extra from './extra';

export default function Content(): JSX.Element {
  const {
    tabs
  } = useProps();
  const rndDraggingDisabled = useRndDraggingDisabled();
  const handleTogglePinned = useHandleTogglePinned();
  
  return <Tabs {...{
    ...tabs,
    variant: TabsVariant.BROWSER,
    extra: <Extra />,
    contentPadding: 'none',
    classNameForTabBar: rndDraggingDisabled ? '' : CLASS_J_RND_HANDLE,
    classNameForTabItem: CLASS_J_RND_PREVENT_CLICK,
    classNameForTabX: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL,
    onTabBarDoubleClick: handleTogglePinned
  }} />;
}
