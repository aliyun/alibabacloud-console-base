import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESubAccountIdentityServiceType
} from '../../../../const';
import intl from '../../../../intl';

import dataBindOrVerifyMfa from './data-bind-or-verify-mfa';

interface IGenerateSubAccountMfaSubmitButtonFnProps {
  verifyType: string;
}

export default function generateSubAccountMfaSubmitButtonFn({
  verifyType
}: IGenerateSubAccountMfaSubmitButtonFnProps): (submitType: 'verify' | 'bind', primaryButtonDisabled: boolean) => DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return (submitType, primaryButtonDisabled) => {
    return {
      label: intl('op:confirm'),
      primary: true,
      disabled: primaryButtonDisabled,
      onClick({
        data,
        lock,
        unlock,
        updateData,
        close
      }) {
        lock(true);
        updateData({
          errorMessage: ''
        });

        const {
          subAccountIdentityServiceParams
        } = data;

        if (subAccountIdentityServiceParams) {
          dataBindOrVerifyMfa({
            submitType,
            bindMfaParams: subAccountIdentityServiceParams.paramsType === ESubAccountIdentityServiceType.BIND_MFA ? subAccountIdentityServiceParams.params : null,
            verifyMfaParams: subAccountIdentityServiceParams.paramsType === ESubAccountIdentityServiceType.VERIFY_SUB_ACCOUNT_MFA ? subAccountIdentityServiceParams.params : null
          }).then(dataIvToken => {
            const ivToken = dataIvToken?.ivToken || 'EMPTY_IV_TOKEN';
            const params = {
              verifyType,
              verifyCode: ivToken
            };

            close(params);
          }).catch(error => {
            updateData({
              errorMessage: (error as Error).message || ''
            });
          }).finally(() => {
            unlock();
          });

          // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
          return false;
        }
      }
    };
  };
}