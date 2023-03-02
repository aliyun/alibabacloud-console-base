import React, {
  useState
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IDialogData,
  IRiskPromptResolveData,
  TTypeOfErrorMessage
} from '../../types';
import {
  BUILT_IN_RISK_CONFIG
} from '../../const';
import {
  useCountDown
} from '../../hook';
import intl from '../../intl';

interface IGenerateCodeButtonProps {
  verifyType: string;
  typeOfErrorMessage?: TTypeOfErrorMessage;
  sendVerifyCode: () => void;
}

const {
  coolingAfterSent, coolingAfterSentFail
} = BUILT_IN_RISK_CONFIG;

/**
 * 生成验证码按钮，有冷却时间
 */
export default function GenerateCodeButton({
  verifyType,
  typeOfErrorMessage,
  sendVerifyCode
}: IGenerateCodeButtonProps): JSX.Element {
  const {
    data: {
      errorMessageObject
    },
    updateData,
    lock,
    unlock
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    countDown,
    setCountDown
  } = useCountDown();
  
  const [stateGenerating, setStateGenerating] = useState<boolean>(false);
  
  const handleClick = async (): Promise<void> => {
    lock();
    setStateGenerating(true);
  
    try {
      await sendVerifyCode();
      
      setCountDown(Math.round(coolingAfterSent));
    } catch (err) {
      if (typeOfErrorMessage) {
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            [typeOfErrorMessage]: (err as Error).message
          }
        });
      }

      setCountDown(Math.round(coolingAfterSentFail));
    } finally {
      setStateGenerating(false);
      unlock();
    }
  };
  
  return <Button {...{
    spm: `get-code-${verifyType}`,
    label: countDown > 0 ? intl('op:resend_after_{n}s', {
      n: countDown
    }) : intl('op:send_code'),
    theme: ButtonTheme.SECONDARY,
    loading: stateGenerating,
    disabled: countDown > 0,
    onClick: handleClick
  }} />;
}

export type {
  IGenerateCodeButtonProps
};
