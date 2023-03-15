import React from 'react';

import {
  FetcherConfig,
  FetcherFnRequest
} from '@alicloud/fetcher';
import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  IFetcherInterceptorConfig,
  IMainAccountRiskInfo,
  IDialogDataNewMainAccountRisk
} from '../../types';
import intl from '../../intl';
import Content from '../../container/new-main-verify-content';

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskConfig: IFetcherInterceptorConfig;
  mainRiskInfo: IMainAccountRiskInfo;
}

export default function riskNewMainVerify({
  request,
  fetcherConfig,
  riskConfig,
  mainRiskInfo
}: IParams): Promise<unknown> {
  const buttonCancel = intl('op:cancel');
  
  return open<unknown, IDialogDataNewMainAccountRisk>({
    title: intl('title:main'),
    size: 'm',
    data: {
      request,
      fetcherConfig,
      riskConfig,
      mainRiskInfo,
      requestId: '',
      errorMessage: ''
    },
    content: <Content />,
    buttons: (data: IDialogDataNewMainAccountRisk) => {
      if (data.hasCancelButton) {
        return [buttonCancel];
      }
      
      return [];
    },
    undefinedAsReject: true
  });
}