import {
  MutableRefObject,
  Dispatch
} from 'react';

import {
  IPropsTab,
  IPropsTabs
} from '../../types';
import {
  EAction
} from '../const';

export type TAction = {
  type: EAction.PRUNE_CLOSED_TABS;
  payload: IPropsTab[];
} | {
  type: EAction.ACTIVATE_TAB;
  payload: IPropsTab;
} | {
  type: EAction.CLOSE_TAB;
  payload: IPropsTab;
} | {
  type: EAction.UPDATE_NAV_OFFSET | EAction.UPDATE_NAV_OFFSET_MAX;
  payload: number;
};

export interface IContextProps extends Required<IPropsTabs> {}

export interface IContextRef {
  refTabs: MutableRefObject<HTMLDivElement>;
  refNav: MutableRefObject<HTMLDivElement>;
}

export interface IContextState {
  activeTab: IPropsTab | null;
  closedTabs: IPropsTab[];
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}

export interface IContextReducer {
  (state: IContextState, action: TAction): IContextState;
}

export interface IContext {
  REF: IContextRef;
  PROPS: IContextProps;
  STATE: IContextState;
  dispatch: Dispatch<TAction>;
}
