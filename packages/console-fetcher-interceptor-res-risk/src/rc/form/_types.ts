export interface IFormItem {
  labelWidth?: number;
  labelTextAlign?: string;
  key?: string;
  label?: string | JSX.Element;
  content: string | JSX.Element;
}