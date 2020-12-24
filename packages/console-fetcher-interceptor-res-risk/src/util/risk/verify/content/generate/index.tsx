import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  EButtonPreset
} from '@alicloud/console-base-rc-button';

import {
  IRiskVerifyDialogData
} from '../../../../../types';
import intl from '../../../../../intl';

interface ISendCodeReturn { // 发送验证码的返回，需要我们在再次发请求的时候带入
  requestId: string;
}

/**
 * 生成验证码按钮，有冷却时间
 */
export default function Generate(): JSX.Element {
  const {
    data: {
      request,
      riskInfo: {
        verifyType,
        codeType
      },
      riskConfig: {
        URL_SEND_CODE,
        COOLING_AFTER_SENT,
        COOLING_AFTER_SEND_FAIL,
        METHOD_SEND_CODE
      }
    },
    updateData,
    lock,
    unlock
  } = useDialog<void, IRiskVerifyDialogData>();
  const [stateGenerating, setStateGenerating] = useState<boolean>(false);
  const [stateCooling, setStateCooling] = useState<number>(0);
  const handleClick = useCallback(async () => {
    lock();
    setStateGenerating(true);
    
    try {
      // 这里用当前的 fetcher
      await request<ISendCodeReturn>({
        method: METHOD_SEND_CODE,
        url: URL_SEND_CODE,
        body: {
          verifyType,
          codeType
        }
      }).then(data => updateData({
        requestId: data?.requestId || ''
      }));
      
      setStateCooling(Math.round(COOLING_AFTER_SENT));
    } catch (err) {
      updateData({
        errorMessage: err?.message || ''
      });
      
      setStateCooling(Math.round(COOLING_AFTER_SEND_FAIL));
    } finally {
      setStateGenerating(false);
      unlock();
    }
  }, [lock, unlock, updateData, request, verifyType, codeType, URL_SEND_CODE, COOLING_AFTER_SENT, COOLING_AFTER_SEND_FAIL, METHOD_SEND_CODE]);
  
  useEffect(() => {
    let timer: number | undefined;
    
    if (stateCooling > 0) {
      timer = window.setTimeout(() => setStateCooling(stateCooling - 1), 1000);
    }
    
    return () => (timer && clearTimeout(timer));
  }, [stateCooling]);
  
  return <Button {...{
    spm: `get-code-${verifyType}`,
    label: stateCooling > 0 ? intl('op:resend_after_{n}s', {
      n: stateCooling
    }) : intl('op:send_code'),
    preset: EButtonPreset.SECONDARY,
    loading: stateGenerating,
    disabled: stateCooling > 0,
    onClick: handleClick
  }} />;
}
