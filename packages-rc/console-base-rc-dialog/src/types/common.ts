export type TStringOrJsx = string | JSX.Element;

export type TDialogData = Record<string, unknown>;

export type TDialogAltIconType = 'info' | 'alert' | 'success' | 'error' | 'confirm';

export interface IDataPrompt {
  value: string;
}

export interface IPromptOptions {
  /**
   * 在输入框上边增加文案
   */
  message?: TStringOrJsx;
  /**
   * 输入框的 placeholder
   */
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  softTrim?: boolean;
  asTextarea?: boolean;
}