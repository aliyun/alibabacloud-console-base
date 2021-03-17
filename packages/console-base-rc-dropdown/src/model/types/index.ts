import {
  ReactNode,
  MutableRefObject,
  Dispatch
} from 'react';

import {
  IPropsDropdown
} from '../../types';
import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.MOUSE_ENTER | EAction.MOUSE_LEAVE;
} | {
  type: EAction.TOGGLE_VISIBLE;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelState {
  visible: boolean;
}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext {
  props: IPropsDropdown;
  state: IModelState;
  refDropdown: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps {
  props: IPropsDropdown;
  children?: ReactNode;
}

export interface IContextForContent {
  visible: boolean;
  showDrop(): void;
  hideDrop(): void;
}
