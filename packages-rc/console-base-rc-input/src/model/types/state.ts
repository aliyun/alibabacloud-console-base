export interface IModelState {
  domInput: HTMLInputElement | null;
  value: undefined | string;
  hovered: boolean;
  focused: boolean;
  /**
   * 中文输入法正在输入中，此时不要触发 onChange
   */
  composing: boolean;
}
