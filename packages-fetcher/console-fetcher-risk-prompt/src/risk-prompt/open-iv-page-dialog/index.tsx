import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from '../../types';
import {
  EAccountType
} from '../../enum';
import DialogTitleForMultipleValidators from '../../rc/dialog-title-for-multiple-validators';
import {
  intlVerifyDeviceType,
  convertToRiskErrorCancelled
} from '../../util';
import intl from '../../intl';
import {
  slsIdentityVerificationStartup
} from '../../sls';

import {
  IIvPageDialogData
} from './types';
import IdentityVerificationIframe from './IdentityVerificationIframe';

interface IProps {
  isMpk: boolean;
  ivPageUrl: string;
  accountType?: EAccountType;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}

export default async function openIvPageDialog({
  isMpk,
  ivPageUrl,
  accountType,
  reRequestWithVerifyResult
}: IProps): Promise<IRiskPromptResolveData> {
  // 埋点
  slsIdentityVerificationStartup({
    isMpk,
    accountType,
    verifyUrl: ivPageUrl
  });

  return open<IRiskPromptResolveData, IIvPageDialogData>({
    size: (data: IIvPageDialogData) => {
      // 主账号风控，嵌入会员平台核身页面，宽度需要设置为 860
      if (accountType === EAccountType.MAIN && !isMpk && data.ivPageLoadSuccess) {
        return 860;
      }

      return 'm';
    },
    title: (data: IIvPageDialogData) => {
      if (data.isMultipleValidators) {
        return <DialogTitleForMultipleValidators />;
      }

      if (data.deviceType?.length === 1) {
        return intlVerifyDeviceType(data.deviceType[0]);
      }

      return intl('title:default');
    },
    content: <IdentityVerificationIframe {...{
      isMpk,
      accountType,
      identityVerificationUrl: ivPageUrl,
      reRequestWithVerifyResult
    }} />,
    // 点击取消或右上角的 X 会调用 reject 逻辑，后续处理会走到 catch 逻辑并且 error 是 undefined
    undefinedAsReject: true
  }).catch(err => {
    throw err ?? convertToRiskErrorCancelled(err);
  });
}