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
      lock(true);
      updateData({
        apiErrorMessage: ''
      });

      const {
        subBindMfaParams
      } = data;

      if (subBindMfaParams) {
        dataBindMfa(subBindMfaParams).then(bindMfaIvToken => {
          const ivToken = bindMfaIvToken.ivToken || 'EMPTY_IV_TOKEN';

          // 绑定 MFA 一定为 ga
          close({
            verifyType: 'ga',
            verifyCode: ivToken
          });
        }).catch(error => {
          updateData({
            apiErrorMessage: (error as Error).message || ''
          });
        }).finally(() => {
          unlock();
        });

        return;
      }

      unlock();
      updateData({
        apiErrorMessage: intl('message:invalid:sub:validator')
      });

      // 阻止弹窗关闭，使得只能通过主动调用 close 关闭弹窗
      return false;
    }
  };
}