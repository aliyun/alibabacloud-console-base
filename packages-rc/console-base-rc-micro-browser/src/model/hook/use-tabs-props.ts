import {
  useMemo
} from 'react';

import {
  TabsProps,
  TabsVariant
} from '@alicloud/console-base-rc-tabs';

import {
  CLASS_J_RND_PREVENT_CLICK,
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
    variant: TabsVariant.BROWSER,
    contentPadding: 'none',
    classNameForTabBar: dragHandleClass,
    classNameForTabItem: CLASS_J_RND_PREVENT_CLICK,
    classNameForTabX: CLASS_J_RND_CANCEL,
    classNameForTabScroller: CLASS_J_RND_CANCEL
  }), [tabs, dragHandleClass]);
}
