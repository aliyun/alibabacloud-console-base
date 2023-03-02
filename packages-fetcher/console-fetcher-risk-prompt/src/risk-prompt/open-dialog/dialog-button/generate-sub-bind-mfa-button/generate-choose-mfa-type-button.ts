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
  ESubBindMfaStep
} from '../../../../enum';
import intl from '../../../../intl';

export default function generateChooseMfaTypeButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> { // eslint-disable-line @typescript-eslint/no-explicit-any
  return {
    label: intl('op:confirm'),
    primary: false,
    disabled: false,
    onClick({
      lock,
      unlock,
      data,
      updateData
    }) {
      const {
        errorMessageObject,
        subGetMfaInfoToBindParams
      } = data;
      const updateErrorMessage = (errorMessage: string): void => {
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            bindMfa: errorMessage
          }
        });
      };

      lock(true);
      updateErrorMessage('');

      if (subGetMfaInfoToBindParams) {
        dataGetMfaInfoToBind(subGetMfaInfoToBindParams).then(getMfaInfoBindData => {
          updateData({
            subBindMfaStep: getMfaInfoBindData.deviceType === ESubVerificationDeviceType.U2F ? ESubBindMfaStep.BIND_U2F : ESubBindMfaStep.BIND_VMFA,
            subGetMfaInfoToBindData: Object.assign({}, getMfaInfoBindData)
          });
        }).catch(error => {
          updateErrorMessage((error as Error).message);
        }).finally(() => {
          unlock();
        });
      } else {
        unlock();
      }

      return false; // return false 阻止弹窗关闭
    }
  };
}