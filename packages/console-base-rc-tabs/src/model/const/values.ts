import _noop from 'lodash/noop';

import {
  IContextState,
  IContextProps
} from '../types';

export const DEFAULT_CONTEXT_PROPS: IContextProps = {
  tabs: [],
  width: -1,
  classNameForTabBar: '',
  classNameForTabItem: '',
  classNameForTabScroller: '',
  activeTab: undefined,
  defaultActiveTab: undefined,
  onTabActivate: _noop,
  onTabClose: _noop
};

export const DEFAULT_CONTEXT_STATE: IContextState = {
  activeTab: null,
  closedTabs: [],
  navOffset: 0,
  navOffsetMax: 0
};
