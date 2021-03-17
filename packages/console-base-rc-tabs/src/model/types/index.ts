import {
  ReactNode,
  MutableRefObject,
  Dispatch
} from 'react';

import {
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

export type TModelDispatch = Dispatch<TAction>;

export interface IModelState {
  activeKey: string | number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}

export interface IModelReducer {
  (state: IModelState, action: TAction): IModelState;
}

export interface IModelProviderProps {
  props: IPropsTabs;
  children: ReactNode;
}

export interface IModelContext {
  props: IPropsTabs;
  state: IModelState;
  refTabs: MutableRefObject<HTMLDivElement | null>;
  refNav: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}
