import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceDidMount from './reduce-did-mount';
import reduceSetActive from './reduce-set-active';
import reduceSetZIndex from './reduce-set-z-index';
import reduceLock from './reduce-lock';
import reduceUnlock from './reduce-unlock';
import reduceUpdateProps from './reduce-update-props';
import reduceUpdateData from './reduce-update-data';
import reduceForceUpdate from './reduce-force-update';
import reduceUpdateWindowHeight from './reduce-update-window-height';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.DID_MOUNT:
      return reduceDidMount(state);
    case EAction.SET_ACTIVE:
      return reduceSetActive(state, action.payload);
    case EAction.SET_Z_INDEX:
      return reduceSetZIndex(state, action.payload);
    case EAction.LOCK:
      return reduceLock(state, action.payload);
    case EAction.UNLOCK:
      return reduceUnlock(state);
    case EAction.UPDATE_PROPS:
      return reduceUpdateProps(state, action.payload);
    case EAction.UPDATE_DATA:
      return reduceUpdateData(state, action.payload);
    case EAction.FORCE_UPDATE:
      return reduceForceUpdate(state);
    case EAction.UPDATE_WINDOW_HEIGHT:
      return reduceUpdateWindowHeight(state);
    default:
      return state;
  }
}
