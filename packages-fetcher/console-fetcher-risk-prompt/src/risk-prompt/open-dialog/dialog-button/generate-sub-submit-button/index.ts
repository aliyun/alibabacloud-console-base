import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  dataVerifySubAccountMfa, ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESubIdentityServiceType
} from '../../../../enum';
import intl from '../../../../intl';
import {
  convertToResolveDataVerifyType
} from '../../../../utils';

import subBindOrVerifyValidators from './sub-bind-mfa-or-verify-validators';

interface IGenerateSubAccountMfaSubmitButtonProps {
  primaryButtonDisabled: boolean;
}

export default function generateSubAccountSubmitButton({
  primaryButtonDisabled
}: IGenerateSubAccountMfaSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
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

      const updateErrorMessageBasedOnVerifyType = (errorMessage: string, verifyType?: ESubVerificationDeviceType | 'bind_mfa'): void => {
        if (verifyType === ESubVerificationDeviceType.U2F) {
          updateData({
            subU2fAuthApiErrorMessage: errorMessage
          });
        } else {
          updateData({
            apiErrorMessage: errorMessage
          });
        }
      };

      const {
        subVerificationDeviceType,
        subIdentityServiceParams
      } = data;

      subBindOrVerifyValidators({
        subIdentityServiceParams,
        subVerificationDeviceType,
        onParamsVerifySuccess: () => {
          updateErrorMessageBasedOnVerifyType('', subVerificationDeviceType);
        }
      });

      if (subIdentityServiceParams?.paramsType === ESubIdentityServiceType.VERIFY_SUB_ACCOUNT) {
        const currentVerifiCationParams = subIdentityServiceParams.params.find(o => o.verifyType === subVerificationDeviceType);

        if (currentVerifiCationParams) {
          updateErrorMessageBasedOnVerifyType('', subVerificationDeviceType);

          dataVerifySubAccountMfa(currentVerifiCationParams).then(verifyMfaIvToken => {
            const ivToken = verifyMfaIvToken.ivToken || 'EMPTY_IV_TOKEN';
            const verifyType = convertToResolveDataVerifyType(currentVerifiCationParams);

            close({
              verifyType,
              verifyCode: ivToken
            });
          }).catch(error => {
            const errorMessage = (error as Error).message || '';

            updateErrorMessageBasedOnVerifyType(errorMessage, subVerificationDeviceType);
          }).finally(() => {
            unlock();
          });
        }

        // return undefined 不会阻止弹窗关闭
        return;
      }

      unlock();
      
      updateErrorMessageBasedOnVerifyType(intl('message:invalid:sub:validator'), subVerificationDeviceType);

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}