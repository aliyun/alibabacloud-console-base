export enum EModalMode {
  FREE = 'free',
  TO_THE_RIGHT = 'to_the_right',
  TO_THE_RIGHT_PINNED = 'to_the_right_pinned',
  MINIMIZED = 'minimized'
}

export enum EAction {
  SET_MODE,
  REFRESH_WINDOW_SIZE,
  RND_RESIZE_START,
  RND_RESIZE,
  RND_DRAG_START,
  RND_DRAG_STOP,
  SET_WINDOW_SCROLLBAR_WIDTH
}
