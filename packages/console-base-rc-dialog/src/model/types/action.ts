import {
  Dispatch
} from 'react';

import {
  EAction
} from '../const';
import {
  IDialogPropsMutable
} from '../../types';

export type TModelAction = {
  type: EAction.DID_MOUNT | EAction.UNLOCK | EAction.UPDATE_WINDOW_HEIGHT | EAction.FORCE_UPDATE;
} | {
  type: EAction.SET_DOM_DIALOG | EAction.SET_DOM_DIALOG_CONTENT;
  payload: HTMLDivElement | null;
} | {
  type: EAction.SET_Z_INDEX;
  payload: number;
} | {
  type: EAction.SET_ACTIVE;
  payload: boolean;
} | {
  type: EAction.LOCK;
  payload?: boolean;
} | {
  type: EAction.UPDATE_PROPS;
  payload: IDialogPropsMutable<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
} | {
  type: EAction.UPDATE_DATA;
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type TModelDispatch = Dispatch<TModelAction>;