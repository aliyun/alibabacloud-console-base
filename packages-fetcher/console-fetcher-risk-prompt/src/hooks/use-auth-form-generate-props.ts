import {
  useMemo,
  useState
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../types';
import {
  ERiskType,
  ESceneKey
} from '../enum';
import {
  useModelProps
} from '../model';
import type {
  IGenerateCodeButtonProps
} from '../rc/generate-code-button';
import {
  dataSendVerifyCode
} from '../utils';

import useCountDown from './use-count-down';

// 发送验证码成功后的成功提示的持续时间（秒）
const SEND_CODE_SUCCESS_TIP_DURATION = 3;

interface IHookResult {
  verifyUniqId: string;
  showSendCodeSuccessTip: boolean;
  generateProps: IGenerateCodeButtonProps;
}

export default function useAuthFormGenerateProps(authFormProps: TAuthFormProps): IHookResult {
  const [stateVerifyUniqId, setStateVerifyUniqId] = useState<string>('');
  const {
    codeType,
    accountId
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

  const generateProps = useMemo<IGenerateCodeButtonProps>(() => {
    const sendVerifyCode = (): Promise<void> => {
      return dataSendVerifyCode({
        ...authFormProps,
        accountId,
        codeType
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
  }, [authFormProps, codeType, accountId, errorMessageObject, currentKeyOfErrorMessageObject, updateData, setCountDown]);

  return {
    generateProps,
    showSendCodeSuccessTip,
    verifyUniqId: stateVerifyUniqId
  };
}