import { EAction } from '../const';
import reduceDidMount from './reduce-did-mount';
import reduceActive from './reduce-active';
import reduceSetZIndex from './reduce-set-z-index';
import reduceLock from './reduce-lock';
import reduceUnlock from './reduce-unlock';
import reduceUpdateProps from './reduce-update-props';
import reduceUpdateData from './reduce-update-data';
import reduceForceUpdate from './reduce-force-update';
import reduceUpdateWindowHeight from './reduce-update-window-height';
export default function reducer(state, action) {
  switch (action.type) {
    case EAction.DID_MOUNT:
      return reduceDidMount(state);

    case EAction.ACTIVATE:
      return reduceActive(state, true);

    case EAction.DEACTIVATE:
      return reduceActive(state, false);

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