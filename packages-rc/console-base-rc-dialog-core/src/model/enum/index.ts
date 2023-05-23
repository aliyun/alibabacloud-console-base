export enum EAction {
  SET_DOM_DIALOG,
  SET_DOM_DIALOG_CONTENT,
  SET_ACTIVE,
  LOCK,
  UNLOCK,
  UPDATE_PROPS,
  UPDATE_DATA,
  SET_Z_INDEX,
  UPDATE_WINDOW_HEIGHT,
  FORCE_UPDATE
}

export enum EDialogFocusHow {
  AUTO,
  NEXT,
  PREV
}

export enum EDialogMode {
  NORMAL = 'normal',
  SLIDE = 'slide',
  SLIDE_UP = 'slide_up'
}

export enum EDialogSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
  AUTO = 'auto',
  ALMOST_FULL = 'almost-full',
  FULL = 'full'
}

export enum EDialogLockState {
  NO,
  YES,
  LOADING
}
