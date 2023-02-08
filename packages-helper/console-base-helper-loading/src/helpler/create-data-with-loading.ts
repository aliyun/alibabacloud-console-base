import {
  ELoadingStatus
} from '../enum';
import {
  IDataWithLoading
} from '../types';

export default function createDataWithLoading<T>(data: T | null | undefined, loading = ELoadingStatus.IDLE, error?: Error): IDataWithLoading<T> {
  return {
    loading,
    data,
    error
  };
}
