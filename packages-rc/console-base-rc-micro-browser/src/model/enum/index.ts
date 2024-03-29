export enum EMicroBrowserMode {
  FREE = 'free',
  PINNED = 'pinned',
  MINIMIZED = 'minimized'
}

export enum EAction {
  SET_MODE,
  SET_DRAGGING,
  SET_RESIZING,
  SET_SIZE_WIDTH,
  SET_SIZE_HEIGHT,
  SET_SIZE_WIDTH_PINNED,
  SET_POSITION_RIGHT,
  SET_POSITION_BOTTOM,
  REFRESH_WINDOW_SIZE,
  RESET
}
