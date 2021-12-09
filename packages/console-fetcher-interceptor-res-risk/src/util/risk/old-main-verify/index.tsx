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
  ESlsResultType
} from '../../../const';
import {
  IFetcherInterceptorConfig,
  IOldMainRiskInfo,
  IOldMainAccountRisk
} from '../../../types';
import intl from '../../../intl';
import {
  intlVerifyTitle
} from '../../intl-verify';
import {
  slsOldMainRisk
} from '../../sls';
import Content from '../../../container/old-main-verify-content';

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskInfo: IOldMainRiskInfo;
  riskConfig: IFetcherInterceptorConfig;
}

/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
export default function OldMainAccountVerify({
  request,
  fetcherConfig,
  riskInfo,
  riskConfig
}: IParams): Promise<unknown> {
  const buttonConfirm: DialogButtonProps<unknown, IOldMainAccountRisk> = {
    spm: 'confirm',
    disabled: true,
    label: intl('op:confirm'),
    onClick({
      data,
      updateData,
      lock,
      unlock,
      close
    }) {
      lock(true);
      updateData({
        errorMessage: ''
      });
      
      const verifyResult = {
        verifyType: riskInfo.verifyType,
        verifyCode: data.code,
        requestId: data.requestId
      };

      const slsParams = {
        verifyType: riskInfo.verifyType,
        detail: riskInfo.detail,
        codeType: riskInfo.codeType,
        sendCodeRequestId: data.requestId,
        verifyCode: data.code
      };
      
      request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
        body: verifyResult
      } : {
        params: verifyResult
      })).then(result => {
        unlock();

        slsOldMainRisk({
          ...slsParams,
          slsResultType: ESlsResultType.SUCCESS
        });
        
        close(result);
      }, (err: FetcherError) => {
        unlock();

        slsOldMainRisk({
          ...slsParams,
          slsResultType: ESlsResultType.FAIL,
          errorMessage: err.message,
          errorCode: err.code
        });
        
        if (err.code === riskConfig.CODE_INVALID_INPUT || err.code === riskConfig.CODE_NEED_VERIFY) { // 虽然后边这个错误码几乎不可能存在，但为了代码的健壮性，还是加上这个判读
          updateData({
            errorMessage: intl('message:code_incorrect')
          });
        } else { // 其他的错误，抛出
          close(err, true);
        }
      });
      
      return false;
    }
  };
  const buttonCancel = intl('op:cancel');
  
  return open<unknown, IOldMainAccountRisk>({
    title: intlVerifyTitle(riskInfo.type),
    data: {
      request,
      riskInfo,
      riskConfig,
      code: '',
      requestId: '',
      errorMessage: ''
    },
    content: <Content />,
    buttons: (data: IOldMainAccountRisk) => {
      return [{
        ...buttonConfirm,
        disabled: !data.code
      }, buttonCancel];
    },
    undefinedAsReject: true
  });
}
