import {
  FetcherError
} from '@alicloud/fetcher';
import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';

import {
  DataChangeOrder
} from '../../../data';
import {
  IFetcherInterceptorConfig
} from '../../../types';

export interface IDialogResult {
  orderId: string;
  orderType: 'cm' | 'cf';
  orderCustomCode: string;
}

export interface IDialogData {
  sourceError: FetcherError;
  interceptorConfig: IFetcherInterceptorConfig;
  changeOrder: DataChangeOrder | null;
  loadingCreate: LoadingStatus;
}
