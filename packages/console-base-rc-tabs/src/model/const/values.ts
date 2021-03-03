import _noop from 'lodash/noop';

import {
  IPropsTabs
} from '../../types';
import {
  IContextState
} from '../types';

export const DEFAULT_CONTEXT_PROPS: IPropsTabs = {
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
