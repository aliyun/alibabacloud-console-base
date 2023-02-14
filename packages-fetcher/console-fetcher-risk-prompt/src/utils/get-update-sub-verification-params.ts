import type {
  ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

import {
  TSubIdentityServiceParams
} from '../types';
import {
  ESubIdentityServiceType
} from '../enum';

interface IProps {
  paramsToUpdate: ParamsVerifySubAccount;
  currentSubIdentityServiceParams?: TSubIdentityServiceParams;
}

export default function getUpdateSubVerificationParams({
  paramsToUpdate,
  currentSubIdentityServiceParams
}: IProps): ParamsVerifySubAccount[] {
  const currentSubVerificationParams = ((): ParamsVerifySubAccount[] => {
    if (currentSubIdentityServiceParams?.paramsType === ESubIdentityServiceType.VERIFY_SUB_ACCOUNT) {
      return [...currentSubIdentityServiceParams.params];
    }

    return [];
  })();

  if (!currentSubVerificationParams.length) {
    return [paramsToUpdate];
  }

  const foundCorrespondingVerifyTypeItemIndex = currentSubVerificationParams.findIndex(o => o.verifyType === paramsToUpdate.verifyType);

  if (foundCorrespondingVerifyTypeItemIndex >= 0) {
    currentSubVerificationParams.splice(foundCorrespondingVerifyTypeItemIndex, 1, paramsToUpdate);

    return currentSubVerificationParams;
  }

  return currentSubVerificationParams.concat(paramsToUpdate);
}