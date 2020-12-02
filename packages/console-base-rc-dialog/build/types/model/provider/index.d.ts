import { HTMLAttributes } from 'react';
import { IDialogProps } from '../../types';
import Context from './_context';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    props: IDialogProps;
}
export default function Provider({ props, children }: IProps): JSX.Element;
export { Context };
