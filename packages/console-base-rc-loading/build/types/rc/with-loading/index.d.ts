import { IPropsWithLoading } from '../../types';
export default function WithLoading<T>({ messageLoading, messageError, messageErrorRetry, messageEmpty, loading, data, renderLoaded, retry }: IPropsWithLoading<T>): JSX.Element;
