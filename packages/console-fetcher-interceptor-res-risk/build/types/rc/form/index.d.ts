import { FormHTMLAttributes } from 'react';
import { IFormItem } from './_types';
interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    items: IFormItem[];
}
/**
 * 一个既简单的 Form
 */
export default function Form({ items, ...props }: IProps): JSX.Element;
export {};
