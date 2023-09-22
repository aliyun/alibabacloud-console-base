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
import {
  EBlockReason
} from '../../../data/enum';

export interface IErrorResponseData {
  code: 'CM.Required' | 'CF.Required';
  data: {
    customCode: string; // 如果允许填入自定义变更单 ID，则需返回该值
    reason: EBlockReason;
  };
}

export interface IDialogResult {
  _orderId_: string;
  _orderType_: 'cm' | 'cf';
  _orderCustomCode_: string;
}

export interface IDialogData {
  sourceError: FetcherError;
  interceptorConfig: IFetcherInterceptorConfig;
  changeOrder: DataChangeOrder | null;
  loadingOfCreate: LoadingStatus;
  loadingOfGet: LoadingStatus;
  pollingLeft: number;
}
