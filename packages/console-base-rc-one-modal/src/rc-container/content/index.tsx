import React from 'react';

import Tabs from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_CANCEL
} from '../../const';
import {
  useProps,
  useRndStateRect,
  useRndDragHandleClass
} from '../../model';

export default function Content(): JSX.Element {
  const {
    tabs
  } = useProps();
  const {
    w
  } = useRndStateRect();
  const dragHandleClass = useRndDragHandleClass();
  
  return <Tabs {...{
    ...tabs,
    contentPadding: 'none',
    classNameForTabBar: dragHandleClass,
    classNameForTabItem: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL,
    width: w // 通知宽度变化
  }} />;
}
