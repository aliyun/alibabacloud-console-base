// export interface IFormItemLabelProps {
//   content: string | JSX.Element;
//   width?: string;
//   textAlign?: string;
// }

export interface IFormItemProps {
  key?: string;
  label?: string | JSX.Element; // | IFormItemLabelProps;
  content: string | JSX.Element;
  help?: string | JSX.Element;
}

export type TFormItem = IFormItemProps | null;
