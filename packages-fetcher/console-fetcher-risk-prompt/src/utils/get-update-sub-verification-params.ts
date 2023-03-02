import type {
  ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

interface IProps {
  paramsToUpdate: ParamsVerifySubAccount;
  currentSubVerificationParams?: ParamsVerifySubAccount[];
}

export default function getUpdateSubVerificationParams({
  paramsToUpdate,
  currentSubVerificationParams = []
}: IProps): ParamsVerifySubAccount[] {
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