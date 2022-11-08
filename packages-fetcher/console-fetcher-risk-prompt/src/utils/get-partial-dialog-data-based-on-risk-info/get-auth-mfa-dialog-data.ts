import {
  ESubMfaDeviceType,
  dataGetMfaInfoToAuth
} from '@alicloud/console-fetcher-risk-data';

import {
  EDialogType,
  ESubAccountIdentityServiceType
} from '../../const';

import {
  TAuthMfaDialogData
} from './_type';

export default async function getAuthMfaDialogData(accountId: string): Promise<TAuthMfaDialogData> {
  const getMfaInfoToAuthData = await dataGetMfaInfoToAuth({
    accountId
  });

  if (getMfaInfoToAuthData.deviceType === ESubMfaDeviceType.U2F) {
    return {
      dialogType: EDialogType.SUB_RISK_U2F_AUTH,
      subAccountIdentityServiceData: {
        dataType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH,
        data: Object.assign({}, getMfaInfoToAuthData)
      }
    };
  }

  return {
    dialogType: EDialogType.SUB_RISK_VMFA_AUTH,
    subAccountIdentityServiceData: {
      dataType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH,
      data: Object.assign({}, getMfaInfoToAuthData)
    }
  };
}