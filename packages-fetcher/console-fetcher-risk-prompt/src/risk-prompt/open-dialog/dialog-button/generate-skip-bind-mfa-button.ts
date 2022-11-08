import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';
import {
  dataSkipBindMfa,
  ParamsSkipBindMfa
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import intl from '../../../intl';

import {
  IGenerateButtonProps
} from './_type';

export default function generateSkipBindMfaButton({
  codeType,
  accountId,
  verifyType
}: IGenerateButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:skip'),
    primary: false,
    onClick({
      lock,
      unlock,
      close,
      updateData
    }) {
      lock(true);

      const skipBindMfaParams: ParamsSkipBindMfa = {
        accountId,
        ext: JSON.stringify({
          codeType
        })
      };

      dataSkipBindMfa(skipBindMfaParams).then(skipBindMfaData => {
        const ivToken = skipBindMfaData.ivToken || 'EMPTY_IV_TOKEN';
        const params = {
          verifyType,
          verifyCode: ivToken
        };

        close(params);
      }).catch(error => {
        updateData({
          errorMessage: (error as Error).message || ''
        });
      });
      unlock();

      return false;
    }
  };
}