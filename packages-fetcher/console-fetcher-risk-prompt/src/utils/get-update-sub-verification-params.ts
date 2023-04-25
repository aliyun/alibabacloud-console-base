import type {
  ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

interface IProps {
  paramsToUpdate: ParamsVerifySubAccount;
  currentSubVerificationParams?: ParamsVerifySubAccount[];
}

/**
 * 由于子账号风控方式为多选，因此需要用数组方式来存储不同方式的风控参数，并用 verifyType 来区分。这个函数用于更新某种风控方式的风控参数。
 * @param paramsToUpdate 需要更新的某种风控方式的验证参数
 * @param currentSubVerificationParams 当前的风控参数数组
 */
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