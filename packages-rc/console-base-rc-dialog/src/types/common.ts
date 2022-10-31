export type TStringOrJsx = string | JSX.Element;

export type TDialogData = Record<string, unknown>;

export type TDialogAltIconType = 'info' | 'alert' | 'success' | 'error' | 'confirm';

export interface IDataPrompt {
  value: string;
}