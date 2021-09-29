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
  INewMainAccountRisk
} from '../../../types';
import intl from '../../../intl';
import Content from '../../../container/new-main-verify-content';

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskConfig: IFetcherInterceptorConfig;
  mainRiskInfo: IMainAccountRiskInfo;
}

export default function RiskMainVerify({
  request,
  fetcherConfig,
  riskConfig,
  mainRiskInfo
}: IParams): Promise<unknown> {
  const buttonCancel = intl('op:cancel');

  return open<unknown, INewMainAccountRisk>({
    title: intl('title:main'),
    size: 'l',
    data: {
      request,
      fetcherConfig,
      riskConfig,
      mainRiskInfo,
      requestId: '',
      errorMessage: ''
    },
    content: <Content />,
    buttons: (data: INewMainAccountRisk) => {
      if (data.hasCancelButton) {
        return [buttonCancel];
      }

      return [];
    },
    undefinedAsReject: true
  });
}