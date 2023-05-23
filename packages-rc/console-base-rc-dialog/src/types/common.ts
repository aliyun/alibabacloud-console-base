export type TDialogAltIconType = 'info' | 'alert' | 'success' | 'error' | 'confirm';

export interface IDataPrompt {
  value: string;
}

export interface IPromptOptions {
  /**
   * 在输入框上边增加文案
   */
  message?: string | JSX.Element;
  /**
   * 输入框的 placeholder
   */
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  softTrim?: boolean;
  asTextarea?: boolean;
}
