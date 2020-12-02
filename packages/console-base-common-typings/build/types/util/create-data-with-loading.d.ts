import { ELoading } from '../const';
import { IDataWithLoading } from '../types';
export default function createDataWithLoading<T>(data: T, loading?: ELoading): IDataWithLoading<T>;
