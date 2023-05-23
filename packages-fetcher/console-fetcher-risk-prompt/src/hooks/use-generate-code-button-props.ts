import {
  useMemo,
  useState
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType,
  ESceneKey
} from '../enum';
import {
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData,
  TKeyofErrorMessageObject
} from '../types';
import {
  useModelProps
} from '../model';
import {
  dataSendVerifyCode
} from '../util';

import useCountDown from './use-count-down';

interface IGenerateCodeButtonProps {
  verifyType: string;
  keyOfErrorMessageObject?: TKeyofErrorMessageObject;
  sendVerifyCode: () => void;
}

interface IHookResult {
  verifyUniqId: string;
  showSendCodeSuccessTip: boolean;
  generateCodeButtonProps: IGenerateCodeButtonProps;
}

// 发送验证码成功后的成功提示的持续时间（秒）
const SEND_CODE_SUCCESS_TIP_DURATION = 3;

export default function useGenerateCodeButtonProps(authFormProps: TAuthFormProps): IHookResult {
  const [stateVerifyUniqId, setStateVerifyUniqId] = useState<string>('');
  const {
    codeType,
    accountId,
    setRiskCanceledErrorProps
  } = useModelProps();
  const {
    data: {
      errorMessageObject
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const currentKeyOfErrorMessageObject = authFormProps.riskType === ERiskType.NEW_SUB ? authFormProps.verifyType : ESceneKey.MAIN_ACCOUNT;

  const {
    countDown,
    setCountDown
  } = useCountDown();
  const showSendCodeSuccessTip = countDown > 0;
  const generateCodeButtonProps = useMemo<IGenerateCodeButtonProps>(() => {
    const sendVerifyCode = (): Promise<void> => {
      return dataSendVerifyCode({
        ...authFormProps,
        accountId,
        codeType,
        setRiskCanceledErrorProps
      }).then(requestId => {
        // 验证码发送成功后需要清空错误
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            [currentKeyOfErrorMessageObject]: ''
          }
        });
        setCountDown(SEND_CODE_SUCCESS_TIP_DURATION);
        setStateVerifyUniqId(requestId);
      });
    };
    
    return {
      verifyType: authFormProps.verifyType || '',
      sendVerifyCode
    };
  }, [authFormProps, codeType, accountId, errorMessageObject, currentKeyOfErrorMessageObject, updateData, setCountDown, setRiskCanceledErrorProps]);

  return {
    generateCodeButtonProps,
    showSendCodeSuccessTip,
    verifyUniqId: stateVerifyUniqId
  };
}

export type {
  IGenerateCodeButtonProps
};