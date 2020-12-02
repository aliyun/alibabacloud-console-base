import { IPropsWithPromise } from '../../types';
export default function WithPromise<T>({ promise, ...props }: IPropsWithPromise<T>): JSX.Element;
