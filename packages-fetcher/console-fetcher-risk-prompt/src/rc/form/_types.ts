export interface IFormItem {
  key?: string;
  labelWidth?: string;
  labelMobileWidth?: string;
  labelTextAlign?: string;
  label?: string | JSX.Element;
  content: string | JSX.Element;
}