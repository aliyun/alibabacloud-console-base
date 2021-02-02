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
  IRiskInfo,
  IRiskVerifyDialogData
} from '../../../types';
import intl from '../../../intl';
import {
  intlVerifyTitle
} from '../../intl-verify';

import Content from './content';

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskInfo: IRiskInfo;
  riskConfig: IFetcherInterceptorConfig;
}

/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
export default ({
  request,
  fetcherConfig,
  riskInfo,
  riskConfig
}: IParams): Promise<unknown> => {
  const buttonConfirm: DialogButtonProps<unknown, IRiskVerifyDialogData> = {
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
      
      request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
        body: verifyResult
      } : {
        params: verifyResult
      })).then(result => {
        unlock();
        
        close(result);
      }, (err: FetcherError) => {
        unlock();
        
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
  
  return open<unknown, IRiskVerifyDialogData>({
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
    buttons: (data: IRiskVerifyDialogData) => {
      return [{
        ...buttonConfirm,
        disabled: !data.code
      }, buttonCancel];
    },
    undefinedAsReject: true
  });
};
