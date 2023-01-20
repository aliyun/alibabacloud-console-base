import {
  ELoadingStatus
} from '../enum';

export interface IDataWithLoading<T> {
  loading: ELoadingStatus;
  data: T | null | undefined;
  error: Error | null | undefined;
}