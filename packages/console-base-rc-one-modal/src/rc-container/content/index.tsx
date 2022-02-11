import React from 'react';

import Tabs, {
  TabsTheme
} from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_CANCEL
} from '../../const';
import {
  useProps,
  useRndDragHandleClass
} from '../../model';

export default function Content(): JSX.Element {
  const {
    tabs
  } = useProps();
  const dragHandleClass = useRndDragHandleClass();
  
  return <Tabs {...{
    ...tabs,
    theme: TabsTheme.INVERSE,
    contentPadding: 'none',
    classNameForTabBar: dragHandleClass,
    classNameForTabItem: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL
  }} />;
}
