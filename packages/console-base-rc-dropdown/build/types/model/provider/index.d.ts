import { HTMLAttributes } from 'react';
import { IPropsDropdown } from '../../types';
import Context from './_context';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    props: IPropsDropdown;
}
export default function Provider({ props, children }: IProps): JSX.Element;
export { Context };
