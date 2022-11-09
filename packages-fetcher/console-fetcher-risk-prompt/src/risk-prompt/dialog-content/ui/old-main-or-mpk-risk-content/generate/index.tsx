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
  IDialogData,
  IRiskPromptResolveData
} from '../../../../../types';
import {
  useModelProps
} from '../../../../../model';
import intl from '../../../../../intl';

import sendVerifyCode from './send-verify-code';

/**
 * 生成验证码按钮，有冷却时间
 */
export default function Generate(): JSX.Element {
  const {
    data: {
      mainOrMpkAccountData,
      oldMainOrMpkRiskInfo
    },
    updateData,
    lock,
    unlock
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    codeType,
    accountId,
    verifyType,
    coolingAfterSent,
    coolingAfterSentFail
  } = useModelProps();

  const [stateCooling, setStateCooling] = useState<number>(0);
  const [stateGenerating, setStateGenerating] = useState<boolean>(false);

  const useMpkSendCodeApi = ((): boolean => {
    if (!oldMainOrMpkRiskInfo) {
      return false;
    }
    
    return oldMainOrMpkRiskInfo.isMpk && !oldMainOrMpkRiskInfo.mpkIsDowngrade;
  })();
  
  const handleClick = async (): Promise<void> => {
    lock();
    setStateGenerating(true);
  
    try {
      // 这里用当前的 fetcher
      await sendVerifyCode({
        codeType,
        accountId,
        verifyType,
        useMpkSendCodeApi
      }).then(requestId => {
        updateData({
          mainOrMpkAccountData: {
            requestId,
            code: mainOrMpkAccountData?.code || ''
          }
        });
      });
      
      setStateCooling(Math.round(coolingAfterSent));
    } catch (err) {
      updateData({
        errorMessage: (err as Error).message
      });

      setStateCooling(Math.round(coolingAfterSentFail));
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
