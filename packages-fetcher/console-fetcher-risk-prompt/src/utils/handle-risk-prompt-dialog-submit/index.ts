import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  TKeyofErrorMessageObject,
  THandleRiskPromptDialogSubmitProps
} from '../../types';
import {
  ESceneKey,
  ERiskType
} from '../../enum';
import {
  CODE_INVALID_INPUT
} from '../../const';
import intl from '../../intl';

import getRiskPromptVerifyResult from './get-risk-prompt-verify-result';

/**
 * 风控弹窗点击确定按钮，或者验证码输入后按回车触发的风控验证函数。
 * dialogSubmitType：旧版主账号风控、MPK 账号风控、子账号验证（MFA/SMS/EMAIL）、子账号绑定 MFA、子账号跳过绑定 MFA 五种情形
 */
export default async function handleRiskPromptDialogSubmit({
  contentContext,
  reRequestWithVerifyResult,
  ...verifyProps
}: THandleRiskPromptDialogSubmitProps): Promise<void> {
  const {
    data, updateData, lock, unlock, close
  } = contentContext;
  const {
    dialogSubmitType
  } = verifyProps;
  const {
    errorMessageObject,
    currentSubVerificationDeviceType
  } = data;

  // 基于当前风控弹窗的账号类型以及风控验证类型，来更新错误信息
  const updateErrorMessage = (errorMessage: string): void => {
    const keyOfErrorMessageObject = ((): TKeyofErrorMessageObject => {
      if (['bind_mfa', 'skip_bind_mfa'].includes(dialogSubmitType)) {
        return ESceneKey.BIND_MFA;
      }

      if (dialogSubmitType === ERiskType.NEW_SUB && currentSubVerificationDeviceType) {
        return currentSubVerificationDeviceType;
      }

      return ESceneKey.MAIN_ACCOUNT;
    })();

    updateData({
      errorMessageObject: {
        ...errorMessageObject,
        [keyOfErrorMessageObject]: errorMessage
      }
    });
  };

  // 锁定 dialog
  lock(true);
  updateData({
    dialogBlocked: true
  });
  updateErrorMessage('');

  const riskPromptVerifyResult = await getRiskPromptVerifyResult({
    dialogData: data,
    verifyProps,
    updateErrorMessage
  });

  if (riskPromptVerifyResult) {
    // 如果 riskPrompt 的参数中，有重新请求被风控接口的函数 reRequestWithVerifyResult
    if (reRequestWithVerifyResult) {
      try {
        const reRequestResponse = await reRequestWithVerifyResult(riskPromptVerifyResult);

        // 如果有 reRequestWithVerifyResult，那么弹窗 close 时对外输出的数据中会包含重新请求被风控接口的响应 reRequestResponse
        close({
          ...riskPromptVerifyResult,
          reRequestResponse
        });
      } catch (error) {
        const {
          code
        } = error as FetcherError;

        // 如果报错是 verifyCodeInvalid，提示验证码错误，并且不关闭弹窗
        if (code === CODE_INVALID_INPUT) {
          updateErrorMessage(intl('message:code_incorrect'));
        } else {
          // 如果重新请求后触发了正常的报错，那么抛出 error，并关闭弹窗
          close(error as Error, true);

          throw error;
        }
      } finally {
        updateData({
          dialogBlocked: false
        });
        unlock();
      }

      return;
    }

    // 如果 riskPrompt 的参数不带 reRequestWithVerifyResult，那么 close 函数的参数只有 riskPromptVerifyResult
    close(riskPromptVerifyResult);
  } else {
    updateData({
      dialogBlocked: false
    });
    unlock();
  }
}