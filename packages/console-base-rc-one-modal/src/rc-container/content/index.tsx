import React from 'react';

import Tabs from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_CANCEL
} from '../../const';
import {
  usePropTabs,
  useRndState,
  useRndDragHandleClass
} from '../../model';

export default function Content(): JSX.Element {
  const tabs = usePropTabs();
  const {
    w
  } = useRndState();
  const dragHandleClass = useRndDragHandleClass();
  
  return <Tabs {...{
    tabs,
    classNameForTabBar: dragHandleClass,
    classNameForTabItem: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL,
    width: w // 通知宽度变化
  }} />;
}