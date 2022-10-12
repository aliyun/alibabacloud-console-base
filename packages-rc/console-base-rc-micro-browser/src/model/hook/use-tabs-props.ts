import {
  useMemo
} from 'react';

import {
  TabsProps,
  TabsTheme
} from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_CANCEL
} from '../const';

import useModelProps from './_use-model-props';
import useRndDragHandleClass from './use-rnd-drag-handle-class';

export default function useTabsProps(): TabsProps {
  const {
    tabs
  } = useModelProps();
  const dragHandleClass = useRndDragHandleClass();
  
  return useMemo((): TabsProps => ({
    ...tabs,
    theme: TabsTheme.INVERSE,
    contentPadding: 'none',
    classNameForTabBar: dragHandleClass,
    classNameForTabItem: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL
  }), [tabs, dragHandleClass]);
}
