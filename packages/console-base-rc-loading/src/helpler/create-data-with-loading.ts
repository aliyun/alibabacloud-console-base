import {
  IDataWithLoading
} from '../types';
import {
  ELoadingStatus
} from '../const';

export default function createDataWithLoading<T>(data: T, loading = ELoadingStatus.IDLE, error?: Error): IDataWithLoading<T> {
  return {
    loading,
    data,
    error
  };
}
