import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  dataVerifyMpk
} from '@alicloud/console-fetcher-risk-data';
import type {
  FetcherError
} from '@alicloud/fetcher';

import {
  IDialogData,
  IRiskPromptResolveData,
  TKeyofErrorMessageObject
} from '../../types';
import {
  ESceneKey,
  ERiskType
} from '../../enum';
import intl from '../../intl';

import subBindOrVerifyValidators from './sub-bind-mfa-or-verify-validators';

type TContentContext = Omit<ReturnType<typeof useDialog<IRiskPromptResolveData, IDialogData>>, 'forceUpdate'>;

interface IOldMainProps {
  verifyType: string;
  dialogSubmitType: ERiskType.OLD_MAIN;
}

interface INewMpkProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  dialogSubmitType: ERiskType.MPK;
}

interface INewSubProps {
  dialogSubmitType: ERiskType.NEW_SUB;
}

type TBasicProps = IOldMainProps | INewMpkProps | INewSubProps;
type TProps = TBasicProps & {
  contentContext: TContentContext;
}

export default async function handleRiskPromptDialogSubmit({
  contentContext,
  ...props
}: TProps): Promise<void> {
  const {
    data, updateData, lock, unlock, close
  } = contentContext;
  const {
    errorMessageObject,
    mainOrMpkAccountData,
    subVerificationParamArray,
    currentSubVerificationDeviceType
  } = data;

  const updateErrorMessageBasedOnVerifyType = (errorMessage: string): void => {
    const keyOfErrorMessageObject = ((): TKeyofErrorMessageObject => {
      if (props.dialogSubmitType === ERiskType.NEW_SUB && currentSubVerificationDeviceType) {
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

  lock(true);
  updateData({
    dialogBlocked: true
  });
  updateErrorMessageBasedOnVerifyType('');

  try {
    if (props.dialogSubmitType === ERiskType.MPK) {
      const {
        accountId, verifyType, codeType
      } = props;
      const {
        code, requestId
      } = mainOrMpkAccountData ?? {};
        
      const verifyMpkData = await dataVerifyMpk({
        accountId,
        verifyType,
        authCode: code || 'EMPTY_MPK_AUTH_CODE',
        riskRequestId: requestId || 'EMPTY_MPK_REQUEST_ID',
        ext: JSON.stringify({
          codeType
        })
      });

      close({
        verifyType,
        verifyCode: verifyMpkData.ivToken || 'EMPTY_MPK_IV_TOKEN'
      });
  
      return;
    }

    if (props.dialogSubmitType === ERiskType.OLD_MAIN) {
      const {
        verifyType
      } = props;
      const {
        code, requestId
      } = mainOrMpkAccountData ?? {};

      close({
        verifyType,
        requestId: requestId || 'EMPTY_OLD_MAIN_REQUEST_ID',
        verifyCode: code || 'EMPTY_OLD_MAIN_CODE'
      });

      return;
    }
  
    const riskPromptResolveData = await subBindOrVerifyValidators({
      subVerificationParamArray,
      currentSubVerificationDeviceType,
      onParamsVerifySuccess: () => {
        updateErrorMessageBasedOnVerifyType('');
      }
    });

    if (riskPromptResolveData) {
      close(riskPromptResolveData);
    } else {
      updateErrorMessageBasedOnVerifyType(intl('message:invalid:sub:validator'));
    }
  } catch (error) {
    updateErrorMessageBasedOnVerifyType((error as FetcherError).message);
  } finally {
    updateData({
      dialogBlocked: false
    });
    unlock();
  }
}