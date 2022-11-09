import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  ESubMfaDeviceType,
  dataGetMfaInfoToBind
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  EDialogType,
  ESubAccountIdentityServiceType
} from '../../../const';
import intl from '../../../intl';

export default function generateChooseMfaNextButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return {
    label: intl('op:confirm'),
    primary: false,
    onClick({
      lock,
      unlock,
      data,
      updateData
    }) {
      lock(true);
      updateData({
        errorMessage: ''
      });

      const {
        subAccountIdentityServiceParams
      } = data;

      if (subAccountIdentityServiceParams?.paramsType === ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND) {
        dataGetMfaInfoToBind(subAccountIdentityServiceParams.params).then(getMfaInfoBindData => {
          updateData({
            dialogType: getMfaInfoBindData.deviceType === ESubMfaDeviceType.U2F ? EDialogType.SUB_RISK_U2F_BIND : EDialogType.SUB_RISK_VMFA_BIND,
            subAccountIdentityServiceData: {
              dataType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND,
              data: Object.assign({}, getMfaInfoBindData)
            }
          });
        }).catch(error => {
          updateData({
            errorMessage: error?.message || ''
          });
        }).finally(() => {
          unlock();
        });
      }

      return false; // return false 阻止弹窗关闭
    }
  };
}