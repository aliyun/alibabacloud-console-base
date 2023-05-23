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

export default function createDialogData(sourceError: FetcherError, interceptorConfig: IFetcherInterceptorConfig = {}): IDialogData {
  return {
    sourceError,
    interceptorConfig,
    loadingCreate: LoadingStatus.IDLE,
    changeOrder: null
  };
}
