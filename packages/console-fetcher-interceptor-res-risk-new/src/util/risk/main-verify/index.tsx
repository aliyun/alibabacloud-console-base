import React from 'react';

import {
  FetcherError,
  FetcherConfig,
  FetcherFnRequest,
  canHaveBody,
  mergeConfig
} from '@alicloud/fetcher';
import {
  DialogButtonProps,
  open
} from '@alicloud/console-base-rc-dialog';

import {
  IFetcherInterceptorConfig,
  IMainAccountRiskInfo,
  IMainRiskVerifyDialogData
} from '../../../types';
import intl from '../../../intl';
import Content from '../../../container/main-verify-content';

interface IParams {
  request: FetcherFnRequest;
  fecherConfig: FetcherConfig;
  riskConfig: IFetcherInterceptorConfig;
  mainRiskInfo: IMainAccountRiskInfo;
}

export default function RiskMainVerify({
  request,
  fecherConfig,
  riskConfig,
  mainRiskInfo
}: IParams): Promise<unknown> {
  const buttonPrimary: DialogButtonProps<unknown, IMainRiskVerifyDialogData> = {
    label: intl('op:confirm'),
    primary: true,
    onClick({
      data,
      lock,
      unlock,
      updateData,
      close
    }) {
      lock(true);
      updateData({
        errorMessage: ''
      });

      const verifyResult = {
        valiateToken: data.valideToken || ''
      };

      request<unknown>(mergeConfig(fecherConfig, canHaveBody(fecherConfig) ? {
        body: verifyResult
      } : {
        params: verifyResult
      })).then(result => {
        unlock();

        close(result);
      }, (error: FetcherError) => {
        unlock();

        if (error.code === riskConfig.CODE_INVALID_INPUT || error.code === riskConfig.CODE_NEED_VERIFY) {
          updateData({
            errorMessage: intl('message:code_incorrect')
          });
        } else {
          close(error, true);
        }

        return false;
      }).catch(err => {
        updateData({
          errorMessage: err?.message || ''
        });
      });
    }
  };

  const buttonCancel = intl('op:cancel');
  
  return open<unknown, IMainRiskVerifyDialogData>({
    title: intl('title:main'),
    data: {
      request,
      mainRiskInfo,
      requestId: '',
      errorMessage: '',
      primaryButtonDisabled: true
    },
    content: <Content />,
    buttons: (data: IMainRiskVerifyDialogData) => {
      return [{
        ...buttonPrimary,
        disabled: data.primaryButtonDisabled
      }, buttonCancel];
    }
  });
}