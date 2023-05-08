import {
  TModelAction,
  IModelState
} from '../types';
import {
  EAction
} from '../enum';

import reduceSetMode from './reduce-set-mode';
import reduceSetDragging from './reduce-set-dragging';
import reduceSetResizing from './reduce-set-resizing';
import reduceSetPositionRight from './reduce-set-position-right';
import reduceSetPositionBottom from './reduce-set-position-bottom';
import reduceSetSizeWidth from './reduce-set-size-width';
import reduceSetSizeWidthPinned from './reduce-set-size-width-pinned';
import reduceSetSizeHeight from './reduce-set-size-height';
import reduceRefreshWindowSize from './reduce-refresh-window-size';
import reduceReset from './reduce-reset';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_MODE:
      return reduceSetMode(state, action.payload);
    case EAction.SET_DRAGGING:
      return reduceSetDragging(state, action.payload);
    case EAction.SET_RESIZING:
      return reduceSetResizing(state, action.payload);
    case EAction.SET_POSITION_RIGHT:
      return reduceSetPositionRight(state, action.payload);
    case EAction.SET_POSITION_BOTTOM:
      return reduceSetPositionBottom(state, action.payload);
    case EAction.SET_SIZE_WIDTH:
      return reduceSetSizeWidth(state, action.payload);
    case EAction.SET_SIZE_WIDTH_PINNED:
      return reduceSetSizeWidthPinned(state, action.payload);
    case EAction.SET_SIZE_HEIGHT:
      return reduceSetSizeHeight(state, action.payload);
    case EAction.REFRESH_WINDOW_SIZE:
      return reduceRefreshWindowSize(state);
    case EAction.RESET:
      return reduceReset(state);
    default:
      return state;
  }
}
