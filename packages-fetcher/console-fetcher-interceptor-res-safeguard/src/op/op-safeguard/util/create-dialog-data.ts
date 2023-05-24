import {
  FetcherError
} from '@alicloud/fetcher';
import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';

import {
  IFetcherInterceptorConfig
} from '../../../types';
import {
  IDialogData
} from '../types';
import {
  POLLING_TIMES
} from '../const';

export default function createDialogData(sourceError: FetcherError, interceptorConfig: IFetcherInterceptorConfig = {}): IDialogData {
  return {
    sourceError,
    interceptorConfig,
    loadingOfCreate: LoadingStatus.IDLE,
    loadingOfGet: LoadingStatus.IDLE,
    changeOrder: null,
    pollingLeft: POLLING_TIMES
  };
}
