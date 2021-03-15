import {
  MutableRefObject,
  Dispatch
} from 'react';

import {
  // IPropsTab,
  IPropsTabs
} from '../../types';
import {
  EAction
} from '../const';

export type TAction = {
  type: EAction.ACTIVATE_TAB;
  payload: string | number;
} | {
  type: EAction.UPDATE_NAV_OFFSET | EAction.UPDATE_NAV_OFFSET_MAX;
  payload: number;
};
// {
//   type: EAction.PRUNE_CLOSED_TABS;
//   payload: IPropsTab[];
// } | {
//   type: EAction.CLOSE_TAB;
//   payload: IPropsTab;
// } | 

export type TModelDispatch = Dispatch<TAction>;

export interface IModelState {
  activeKey: string | number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
  // closedTabs: IPropsTab[];
}

export interface IModelReducer {
  (state: IModelState, action: TAction): IModelState;
}

export interface IModelContext {
  props: IPropsTabs;
  state: IModelState;
  refTabs: MutableRefObject<HTMLDivElement | null>;
  refNav: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}
