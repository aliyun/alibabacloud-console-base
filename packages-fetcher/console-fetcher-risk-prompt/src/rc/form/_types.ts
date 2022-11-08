export interface IFormItem {
  key?: string;
  labelWidth?: number;
  labelTextAlign?: string;
  label?: string | JSX.Element;
  content: string | JSX.Element;
}