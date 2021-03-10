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

export type TModelDispatch = Dispatch<TAction>;

export interface IModelState {
  activeTab: IPropsTab | null;
  closedTabs: IPropsTab[];
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}

export interface IModelReducer {
  (state: IModelState, action: TAction): IModelState;
}

export interface IModelContext {
  PROPS: IPropsTabs;
  STATE: IModelState;
  refTabs: MutableRefObject<HTMLDivElement | null>;
  refNav: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}
