import React from 'react';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';

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
  EAccountType,
  ESlsResultType
} from '../../../enum';
import {
  IFetcherInterceptorConfig,
  ITokenVerifyData,
  IMpkRisk,
  IMpkRiskInfo,
  IVerifyMpkPayload
} from '../../../types';
import intl from '../../../intl';
import {
  intlVerifyTitle
} from '../../intl-verify';
import {
  slsVerifyMpk,
  slsMpkRisk
} from '../../sls';
import getTicketType from '../../get-ticket-type';
import Content from '../../../container/old-main-or-mpk-verify-content';

const ticketType = getTicketType();

interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskInfo: IMpkRiskInfo;
  riskConfig: IFetcherInterceptorConfig;
}

/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
export default function riskMpkVerify({
  request,
  fetcherConfig,
  riskInfo,
  riskConfig
}: IParams): Promise<unknown> {
  const buttonConfirm: DialogButtonProps<unknown, IMpkRisk> = {
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
      
      const {
        code,
        requestId
      } = data;
      const verifyMpkSlsParams = {
        ..._omit(riskInfo, ['type', 'risk']),
        authCode: code,
        sendCodeRequestId: requestId
      };
      const mpkRiskSlsParams = _pick(riskInfo, ['isMpk', 'accountId', 'mpkIsDowngrade']);
      const verifyMpkBody: IVerifyMpkPayload = {
        AuthCode: code,
        AccountId: riskInfo.accountId,
        VerifyType: riskInfo.verifyType,
        TicketType: ticketType,
        IdType: EAccountType.MAIN,
        RiskRequestId: requestId,
        Ext: JSON.stringify({
          codeType: riskInfo.codeType
        })
      };

      // 首先调用 /identity/verify 来获取虚商验证码验证的 token
      request<ITokenVerifyData>({
        method: riskConfig.REQUEST_METHOD,
        headers: {
          'Content-Type': 'application/json'
        },
        url: riskConfig.URL_VERIFY,
        body: {
          ...verifyMpkBody
        }
      }).then(verifyMpkRes => {
        const verifyResult = {
          verifyType: riskInfo.verifyType,
          verifyCode: verifyMpkRes?.IvToken
        };

        slsVerifyMpk({
          ...verifyMpkSlsParams,
          slsResultType: ESlsResultType.SUCCESS
        });
        
        // 如果获取验证 token 成功，那么重新请求被风控的接口 
        request<unknown>(mergeConfig(fetcherConfig, canHaveBody(fetcherConfig) ? {
          body: verifyResult
        } : {
          params: verifyResult
        })).then(result => {
          unlock();
  
          slsMpkRisk({
            ...verifyMpkSlsParams,
            slsResultType: ESlsResultType.SUCCESS
          });
          
          // 重新请求被风控的接口，把 data 抛出，给后续的拦截器使用，并调用 close 方法关闭弹窗
          close(result);
        }, (err: FetcherError) => {
          unlock();
  
          slsMpkRisk({
            ...mpkRiskSlsParams,
            slsResultType: ESlsResultType.FAIL,
            errorCode: err.code,
            errorMessage: err.message
          });
          
          if (err.code === riskConfig.CODE_INVALID_INPUT || err.code === riskConfig.CODE_NEED_VERIFY) { // 虽然后边这个错误码几乎不可能存在，但为了代码的健壮性，还是加上这个判读
            updateData({
              errorMessage: intl('message:code_incorrect')
            });
          } else { // 其他的错误，抛出
            close(err, true);
          }
        });
      }).catch(err => {
        const errorMessage = err?.message || '';

        slsMpkRisk({
          ...mpkRiskSlsParams,
          errorMessage,
          slsResultType: ESlsResultType.FAIL
        });

        updateData({
          errorMessage
        });
      });
      unlock();
      
      return false;
    }
  };
  const buttonCancel = intl('op:cancel');
  
  return open<unknown, IMpkRisk>({
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
    buttons: (data: IMpkRisk) => {
      return [{
        ...buttonConfirm,
        disabled: !data.code
      }, buttonCancel];
    },
    undefinedAsReject: true
  });
}
