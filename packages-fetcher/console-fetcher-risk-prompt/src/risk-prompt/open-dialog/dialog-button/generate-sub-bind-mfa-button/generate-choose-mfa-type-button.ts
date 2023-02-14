import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType,
  dataGetMfaInfoToBind
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESubBindMfaStep,
  ESubIdentityServiceType
} from '../../../../enum';
import intl from '../../../../intl';

interface IProps {
  primaryButtonDisabled: boolean;
}

export default function generateChooseMfaTypeButton({
  primaryButtonDisabled
}: IProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return {
    label: intl('op:confirm'),
    primary: false,
    disabled: primaryButtonDisabled,
    onClick({
      lock,
      unlock,
      data,
      updateData
    }) {
      lock(true);
      updateData({
        apiErrorMessage: ''
      });

      const {
        subIdentityServiceParams
      } = data;

      if (subIdentityServiceParams?.paramsType === ESubIdentityServiceType.GET_MFA_INFO_TO_BIND) {
        dataGetMfaInfoToBind(subIdentityServiceParams.params).then(getMfaInfoBindData => {
          updateData({
            subBindMfaStep: getMfaInfoBindData.deviceType === ESubVerificationDeviceType.U2F ? ESubBindMfaStep.BIND_U2F : ESubBindMfaStep.BIND_VMFA,
            subIdentityServiceData: {
              dataType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND,
              data: Object.assign({}, getMfaInfoBindData)
            }
          });
        }).catch(error => {
          updateData({
            apiErrorMessage: error?.message || ''
          });
        }).finally(() => {
          unlock();
        });
      }

      return false; // return false 阻止弹窗关闭
    }
  };
}