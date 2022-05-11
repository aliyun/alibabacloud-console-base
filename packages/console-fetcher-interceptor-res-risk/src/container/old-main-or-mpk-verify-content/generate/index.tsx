import React, {
  useState,
  useEffect
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  ERisk,
  EAccountType,
  ESlsResultType
} from '../../../enum';
import {
  IMpkRisk,
  IMpkRiskInfo,
  IOldMainAccountRisk,
  IOldMainRiskInfo
} from '../../../types';
import intl from '../../../intl';
import {
  slsMpkSendCode,
  slsOldMainRiskSendCode
} from '../../../util/sls';

interface ISendCodeReturn { // 发送验证码的返回，需要我们在再次发请求的时候带入
  requestId: string;
}

interface IMpkProps {
  isMpk: boolean; // 是否是轻量级虚商
  accountId: string;
  mpkIsDowngrade: boolean; // 轻量级虚商是否调用 /risk/sendVerifyMessage.json 发送验证码（降级情况）
  useMpkSendCodeApi: boolean; // 轻量级虚商是否调用新接口 /identity/send 发送验证码
}

const getMpkSetting = (riskInfo: IMpkRiskInfo | IOldMainRiskInfo): IMpkProps => {
  const {
    mpkIsDowngrade
  } = riskInfo;

  if (riskInfo.risk === ERisk.MPK) {
    const {
      isMpk
    } = riskInfo;

    return {
      isMpk,
      mpkIsDowngrade,
      accountId: riskInfo.accountId,
      useMpkSendCodeApi: isMpk && !mpkIsDowngrade
    };
  }

  // 非轻量级虚商的旧版主账号风控，一定调用 /risk/sendVerifyMessage.json 发送验证码
  return {
    mpkIsDowngrade,
    isMpk: false,
    accountId: '',
    useMpkSendCodeApi: false
  };
};

/**
 * 生成验证码按钮，有冷却时间
 */
export default function Generate(): JSX.Element {
  const {
    data: {
      request,
      riskInfo,
      riskConfig: {
        URL_SEND_CODE,
        URL_SUB_OR_MPK_SEND_CODE,
        COOLING_AFTER_SENT,
        COOLING_AFTER_SEND_FAIL,
        REQUEST_METHOD
      }
    },
    updateData,
    lock,
    unlock
  } = useDialog<void, IMpkRisk | IOldMainAccountRisk>();
  const [stateGenerating, setStateGenerating] = useState<boolean>(false);
  const [stateCooling, setStateCooling] = useState<number>(0);

  const {
    codeType,
    verifyType
  } = riskInfo;
  const {
    isMpk,
    accountId,
    mpkIsDowngrade,
    useMpkSendCodeApi
  } = getMpkSetting(riskInfo);
  
  const codeAndVerifyParams = {
    codeType,
    verifyType
  };
  const mpkSlsParams = {
    ...codeAndVerifyParams,
    isMpk,
    mpkIsDowngrade
  };
  const handleClick = async (): Promise<void> => {
    lock();
    setStateGenerating(true);
    const requestBody = useMpkSendCodeApi ? {
      AccountId: accountId!,
      VerifyType: verifyType,
      AccountType: EAccountType.MAIN,
      Ext: JSON.stringify({
        codeType
      })
    } : codeAndVerifyParams;
    const requestHeader = useMpkSendCodeApi ? { headers: { 'Content-Type': 'application/json' } } : {}; // 调用 /identity/send 接口时，Content-Type 要设置为 application/json
    
    try {
      // 这里用当前的 fetcher
      await request<ISendCodeReturn>({
        method: REQUEST_METHOD,
        url: useMpkSendCodeApi ? URL_SUB_OR_MPK_SEND_CODE : URL_SEND_CODE, // 如果是新版的虚商（isMpk），并且不走降级方案，使用新的发送验证码的接口
        body: requestBody,
        ...requestHeader
      }).then(data => {
        const requestId = data?.requestId || '';

        updateData({
          requestId
        });

        if (isMpk) {
          slsMpkSendCode({
            ...mpkSlsParams,
            slsResultType: ESlsResultType.SUCCESS,
            sendCodeRequestId: requestId
          });
        } else {
          slsOldMainRiskSendCode({
            ...codeAndVerifyParams,
            mpkIsDowngrade,
            slsResultType: ESlsResultType.SUCCESS,
            sendCodeRequestId: requestId
          });
        }
      });
      
      setStateCooling(Math.round(COOLING_AFTER_SENT!));
    } catch (err) {
      const errorMessage = (err as Error)?.message || '';

      updateData({
        errorMessage
      });

      if (isMpk) {
        slsMpkSendCode({
          ...mpkSlsParams,
          errorMessage,
          slsResultType: ESlsResultType.FAIL
        });
      } else {
        slsOldMainRiskSendCode({
          ...codeAndVerifyParams,
          errorMessage,
          mpkIsDowngrade,
          slsResultType: ESlsResultType.FAIL
        });
      }
      
      setStateCooling(Math.round(COOLING_AFTER_SEND_FAIL!));
    } finally {
      setStateGenerating(false);
      unlock();
    }
  };
  
  useEffect((): () => void => {
    let timer: number | undefined;
    
    if (stateCooling > 0) {
      timer = window.setTimeout(() => setStateCooling(stateCooling - 1), 1000);
    }
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [stateCooling]);
  
  return <Button {...{
    spm: `get-code-${verifyType}`,
    label: stateCooling > 0 ? intl('op:resend_after_{n}s', {
      n: stateCooling
    }) : intl('op:send_code'),
    theme: ButtonTheme.SECONDARY,
    loading: stateGenerating,
    disabled: stateCooling > 0,
    onClick: handleClick
  }} />;
}
