import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  dataBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  ESceneKey
} from '../../../../enum';
import intl from '../../../../intl';

export default function generateBindMfaButton(): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    primary: true,
    disabled: false,
    onClick({
      data,
      lock,
      unlock,
      updateData,
      close
    }) {
      const {
        subBindMfaParams,
        errorMessageObject
      } = data;

      const updateErrorMessage = (errorMessage: string): void => {
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            [ESceneKey.BIND_MFA]: errorMessage
          }
        });
      };

      lock(true);
      updateErrorMessage('');

      if (subBindMfaParams) {
        dataBindMfa(subBindMfaParams).then(bindMfaIvToken => {
          const ivToken = bindMfaIvToken.ivToken || 'EMPTY_IV_TOKEN';

          // 绑定 MFA 一定为 ga
          close({
            verifyType: 'ga',
            verifyCode: ivToken
          });
        }).catch(error => {
          updateErrorMessage((error as Error).message);
        }).finally(() => {
          unlock();
        });

        return;
      }

      unlock();
      updateErrorMessage(intl('message:invalid:sub:validator'));

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}