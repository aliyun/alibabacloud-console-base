import {
  TModelAction,
  IModelState
} from '../types';
import {
  EAction
} from '../const';

import reduceChangeMode from './reduce-change-mode';
import reduceRndDragStart from './reduce-rnd-drag-start';
import reduceRndDragStop from './reduce-rnd-drag-stop';
import reduceRndResizeStart from './reduce-rnd-resize-start';
import reduceRndResize from './reduce-rnd-resize';
import reduceRefreshWindowSize from './reduce-refresh-window-size';
import reduceSetWindowScrollbarWidth from './reduce-set-window-scrollbar-width';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_MODE:
      return reduceChangeMode(state, action.payload);
    case EAction.RND_DRAG_START:
      return reduceRndDragStart(state);
    case EAction.RND_DRAG_STOP:
      return reduceRndDragStop(state, action.payload);
    case EAction.RND_RESIZE_START:
      return reduceRndResizeStart(state);
    case EAction.RND_RESIZE:
      return reduceRndResize(state, action.payload);
    case EAction.REFRESH_WINDOW_SIZE:
      return reduceRefreshWindowSize(state);
    case EAction.SET_WINDOW_SCROLLBAR_WIDTH:
      return reduceSetWindowScrollbarWidth(state, action.payload);
    default:
      return state;
  }
}
